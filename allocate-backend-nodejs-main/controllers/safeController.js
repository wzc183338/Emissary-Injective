const asyncHandler = require("express-async-handler");
const generateWebToken = require("../utils/token/generateToken");
const { programSuccessMessage, safeSuccessMessage } = require("../utils/responseMessages/success");

const {
    useErrorResponse,
    useSuccessResponse,
} = require("../utils/apiResponse/apiResponse");



// Importing Model
const SafeModel = require("../models/SafeModel");
const UserModel = require("../models/UserModel");
const SafeApproverRequest = require("../models/SafeApproverRequestMode");
const SafeApproverModel = require("../models/SafeApproverRequestMode");



const createSafe = asyncHandler(async (req, res) => {
    try {
        const { safeId, approvers, approversCount, name, desc, emissaryId, asset, recipientWalletAddress, amount, lumSumRelease, mileStoneRelease, mileStoneReleaseAmount, lumSumReleaseAmount } = req.body;

        const user = await UserModel.findOne({
            _id: req.user._id,
        });

        const safe = await SafeModel.create({
            userId: req.user._id,
            name: name,
            safeId: safeId,
            desc: desc,
            asset: asset,
            recipientWalletAddress: recipientWalletAddress,
            amount,
            ownerId: user._id,
            ownerAddress: user.userAddress,
            emissaryId: emissaryId,
            approvers: approvers,
            approversCount: approversCount,
            lumSumRelease: lumSumRelease,
            lumSumReleaseAmount: lumSumReleaseAmount,
            mileStoneRelease: mileStoneRelease,
            mileStoneReleaseAmount: mileStoneReleaseAmount,
            approvedCount: 0,
        });

        const safeApproversRequest = await Promise.all(approvers.map(async (approverAddress) => {
            const user = await UserModel.findOne({ userAddress: approverAddress });
            console.log(user);

            if (user) {
                const safeApprover = await SafeApproverModel.create({
                    approverId: user._id,
                    approverAddress: user.userAddress,
                    emissaryId: emissaryId,
                    safeId: safeId,
                });
                return safeApprover;
            }
            console.log(`User not found for address: ${approverAddress}`);
            return null;
        }));

        console.log(safeApproversRequest)

        return useSuccessResponse(
            res,
            safeSuccessMessage.Created,
            { safe }, // If you want to return the created transferRequestRecords as well
            200
        );
    } catch (e) {
        console.log(e);
        return useErrorResponse(res, e.message, 429);
    }
});


const getUserSafes = asyncHandler(async (req, res) => {

    const { emissaryId } = req.body;
    const userSafes = await SafeModel.find({
        emissaryId: emissaryId
    });

    if (!userSafes) {
        return useErrorResponse(res, "Safes not found", 429);
    }

    const formattedSafes = userSafes.map(safe => ({
        ...safe._doc,
        createdDate: safe.createdDate.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }));

    return useSuccessResponse(res, "Safe fetches successfully", formattedSafes, 200);
});


const getUserSafeById = asyncHandler(async (req, res) => {
    const userSafe = await SafeModel.findOne({
        safeId: req.body.safeId
    });

    if (!userSafe) {
        return useErrorResponse(res, "Safe not found", 404); // 404 is a more appropriate status code for not found resources
    }

    const formattedSafe = {
        ...userSafe._doc,
        createdDate: userSafe.createdDate.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };

    return useSuccessResponse(res, "Safe fetched successfully", formattedSafe, 200);
});


const getSafeByEmissaryId = asyncHandler(async (req, res) => {
    try {
        const { emissaryId } = req.body;

        console.log(emissaryId)
        if (!emissaryId) {
            return useErrorResponse(res, "Emissary id not provided", 429)
        }

        const safes = await SafeModel.find({
            emissaryId: emissaryId
        })

        return useSuccessResponse(res, "Safe Fetched Successfully", safes, 200)
    } catch (error) {
        console.log(error)
        return useErrorResponse(res, e.message, 429)
    }
})


const getApproversBySafe = asyncHandler(async (req, res) => {
    const safeApprovers = await SafeApproverRequest.find({
        safeId: req.body.safeId
    });

    if (!safeApprovers) {
        return useErrorResponse(res, "Safe Roles not found", 404); // 404 is typically used for not found resources
    }

    const formattedSafeApprovers = safeApprovers.map(approver => {
        const formattedApprover = { ...approver._doc };
        if (approver.signedTime) {
            formattedApprover.signedTime = new Date(approver.signedTime).toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            });
        }
        return formattedApprover;
    });

    return useSuccessResponse(res, "Safe roles fetched successfully", formattedSafeApprovers, 200);
});


const approveSafeByUser = asyncHandler(async (req, res) => {
    try {
        const { safeId } = req.body;
        const user = await UserModel.findOne({
            _id: req.user._id
        })

        console.log(req.user._id)

        if (!user) {
            return useErrorResponse(res, "User not Found", 429)
        }

        const approverExist = await SafeApproverRequest.findOne({
            approverId: user._id,
            status: "Pending"
        })

        if (!approverExist) {
            return useErrorResponse(res, "you are not authorized to perform this action", 429)
        }

        approverExist.status = "Completed"
        approverExist.signedTime = Date.now()
        approverExist.save()

        console.log(approverExist)

        const safe = await SafeModel.findOne({
            safeId: safeId,
        })

        const approverCount = await SafeApproverRequest.find({
            safeId: safeId,
            status: "Completed"
        })

        console.log(safe, "safe")
        safe.approvedCount = approverCount.length
        safe.save()


        return useSuccessResponse(res, "User approves safe successfully", approverExist, 200)
    } catch (err) {
        console.log(err)
        return useErrorResponse(res, err.message, 429)
    }
})









module.exports = {
    createSafe,
    getUserSafes,
    getUserSafeById,
    getApproversBySafe,
    approveSafeByUser,
    getSafeByEmissaryId
};
