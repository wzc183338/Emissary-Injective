const asyncHandler = require("express-async-handler");
const generateWebToken = require("../utils/token/generateToken");
const { emissarySuccessMessage, } = require("../utils/responseMessages/success");
const { emissaryRoleErrorMessage, userErrorMessages, emissaryRoleErorMessage } = require("../utils/responseMessages/error");
const {
    useErrorResponse,
    useSuccessResponse,
} = require("../utils/apiResponse/apiResponse");
const moment = require('moment')


// Importing Model
const EmissaryModel = require("../models/EmissaryModel");
const UserModel = require("../models/UserModel");
const { generateUniqueCode } = require("../services/helper");


const createEmissary = asyncHandler(async (req, res) => {
    try {
        const { name, url, asset } = req.body;
        const user = await UserModel.findOne({ _id: req.user._id })
        let code;
        let uniqueCode;
        do {
            code = generateUniqueCode();
            uniqueCode = await EmissaryModel.findOne({
                uniqueCode: code
            });
        } while (uniqueCode);


        // const url = `${process.env.PUBLIC_URL}/emissary/${code}`

        const emissary = await EmissaryModel.create({
            name: name,
            ownerId: req.user._id,
            ownerAddress: user.userAddress,
            logo: req.file.path,
            url: url,
            uniqueCode: code,
            asset: asset
        });

        return useSuccessResponse(
            res,
            emissarySuccessMessage.Created,
            emissary,
            200
        );
    } catch (e) {
        console.log(e);
        return useErrorResponse(res, e.message, 429);
    }
});

const getUserEmissary = asyncHandler(async (req, res) => {
    try {
        const userId = req.user._id;
        const emissaryIds = await EmissaryModel.find({
            $or: [
                { ownerId: userId },
                { access: 'Public' },
                { emissaryUsers: userId }
            ]
        }).distinct('_id');
        const detailedEmissaries = await EmissaryModel.find({ _id: { $in: emissaryIds } })
            .sort({ lastLogin: -1 });
        const formattedEmissaries = detailedEmissaries.map(emissary => ({
            ...emissary.toObject(),
            lastLogin: emissary.lastLogin ? moment(emissary.lastLogin).fromNow() : 'Never'
        }));

        return useSuccessResponse(
            res,
            emissarySuccessMessage.Fetched,
            formattedEmissaries,
            200
        );
    } catch (e) {
        console.log(e);
        return useErrorResponse(res, e.message, 429);
    }
});




const getEmissary = asyncHandler(async (req, res) => {
    try {
        const { emissaryId } = req.body;

        const emissary = await EmissaryModel.findOne({
            _id: emissaryId
        });

        if (emissary) {
            emissary.lastLogin = new Date();
            await emissary.save();

            const formattedEmissary = {
                ...emissary.toObject(),
                lastLogin: emissary.lastLogin ? moment(emissary.lastLogin).fromNow() : 'Never'
            };

            return useSuccessResponse(
                res,
                emissarySuccessMessage.Fetched,
                formattedEmissary,
                200
            );
        } else {
            return useErrorResponse(res, 'Emissary not found', 404);
        }
    } catch (error) {
        console.log(error);
        return useErrorResponse(res, error.message, 429);
    }
});

const getEmissaryWithUniqueCode = asyncHandler(async (req, res) => {
    const { uniqueCode } = req.body;

    const emissary = await EmissaryModel.findOne({
        uniqueCode: uniqueCode
    })

    if (emissary) {
        const userIdExists = emissary.emissaryUsers.includes(req.user._id);

        if (!userIdExists) {
            if (emissary.ownerId != req.user._id) {
                emissary.emissaryUsers.push(req.user._id);
                await emissary.save();
            }
        }
        emissary.lastLogin = new Date();
        await emissary.save();

        const formattedEmissary = {
            ...emissary.toObject(),
            lastLogin: emissary.lastLogin ? moment(emissary.lastLogin).fromNow() : 'Never'
        };

        return useSuccessResponse(
            res,
            emissarySuccessMessage.Fetched,
            formattedEmissary,
            200
        );
    } else {
        return useErrorResponse(res, 'Emissary not found', 404);
    }
})


const updateUserEmissary = asyncHandler(async (req, res) => {

    try {
        const { emissaryId, asset, name, access, nftContractAddress } = req.body;

        const emissary = await EmissaryModel.findOne({
            _id: emissaryId
        })

        if (!emissary) {
            return useErrorResponse(res, "Emissary not found", 429)
        }
        if (req?.file?.path) {
            emissary.logo = req?.file?.path;
        }

        if (name) emissary.name = name;
        if (asset) emissary.asset = asset;
        if (access) {
            if (access == "Public") {
                emissary.access = access
                emissary.nftContractAddress = null
            } else if (access == "NFTHolder") {
                console.log(access)
                emissary.access = access
                emissary.nftContractAddress = nftContractAddress
            }
        }

        const updatedEmissary = await emissary.save();
        return useSuccessResponse(res, "Emissary Updated Successfully", updatedEmissary, 200)
    } catch (err) {
        console.log(err)
    }
})







module.exports = {
    createEmissary,
    getUserEmissary,
    getEmissary,
    getEmissaryWithUniqueCode,
    updateUserEmissary
};
