const asyncHandler = require("express-async-handler");
const generateWebToken = require("../utils/token/generateToken");
const { emissaryRoleSuccessMessage } = require("../utils/responseMessages/success");
const { emissaryRoleErrorMessage } = require("../utils/responseMessages/error");
const {
    useErrorResponse,
    useSuccessResponse,
} = require("../utils/apiResponse/apiResponse");



// Importing Model
const EmissaryRoleModel = require("../models/EmissaryRoleModel");
const { roles } = require("../utils/enums");


const AddEmissaryRole = asyncHandler(async (req, res) => {
    try {
        const { userId, userAddress, emissaryId, roleType, } = req.body;

        const userExists = await EmissaryRoleModel.findOne({
            userAddress: userAddress,
            emissaryId: emissaryId
        })

        if (userExists) {
            return useErrorResponse(res, emissaryRoleErrorMessage.Exists, 429)
        }

        const emissary = await EmissaryRoleModel.create({
            userId: userId,
            userAddress: userAddress,
            emissaryId: emissaryId,
            roleType: roleType
        })

        return useSuccessResponse(
            res,
            emissaryRoleSuccessMessage.Created,
            emissary,
            200
        );
    } catch (e) {
        console.log(e);
        return useErrorResponse(res, e.message, 429)

    }
});


const GetAllEmissaryRole = asyncHandler(async (req, res) => {
    try {
        const { emissaryId } = req.body;

        console.log(emissaryId)


        const emissaries = await EmissaryRoleModel.find({
            emissaryId: emissaryId,
        })

        if (!emissaries) {
            return useErrorResponse(res, emissaryRoleErrorMessage.NotFound, 429)
        }

        return useSuccessResponse(
            res,
            emissaryRoleSuccessMessage.Fetched,
            emissaries,
            200
        );
    } catch (e) {
        console.log(e);
        return useErrorResponse(res, e.message, 429)

    }
});


const deleteEmissaryRole = asyncHandler(async (req, res) => {
    try {

        const { roleId } = req.body;

        if (!roleId) {
            return useErrorResponse(res, "Role Id not found", 429)
        }

        await EmissaryRoleModel.findOneAndDelete({
            _id: roleId
        })

        return useSuccessResponse(res, "Role Delete Successfully", {}, 200)
    } catch (err) {
        return useErrorResponse(res, e.message, 429)
    }
})



module.exports = {
    AddEmissaryRole,
    GetAllEmissaryRole,
    deleteEmissaryRole
};
