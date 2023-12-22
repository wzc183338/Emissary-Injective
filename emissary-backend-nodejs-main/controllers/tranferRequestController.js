const asyncHandler = require("express-async-handler");
const generateWebToken = require("../utils/token/generateToken");
const { emissarySuccessMessage, transferRequestSuccessMessage, userSuccessMessages } = require("../utils/responseMessages/success");
const { programErrorMessage } = require("../utils/responseMessages/error");
const {
    useErrorResponse,
    useSuccessResponse,
} = require("../utils/apiResponse/apiResponse");
const moment = require('moment')


// Importing Model
const TranferRequestModel = require("../models/TranferRequestModel");
const UserModel = require("../models/UserModel");
const ProgramModel = require("../models/ProgramModel");
const { generateUniqueCode } = require("../services/helper");
const { tranferType } = require("../utils/enums");


const createTranferRequest = asyncHandler(async (req, res) => {
    try {
        const { projectName, programId, amount, recipientWalletAddress, type } = req.body;
        const user = await UserModel.findOne({ _id: req.user._id })

        if (!user) {
            return useErrorResponse(res, userSuccessMessages.UserNotFound, 429);
        }

        const program = await ProgramModel.findOne({
            _id: programId
        })

        if (!program) {
            return useErrorResponse(res, programErrorMessage.NotFound, 429);
        }

        console.log(req.file)

        const tranferRequst = await TranferRequestModel.create({
            programName: program.name,
            projectName: projectName,
            userAddress: user.userAddress,
            programId: program._id,
            amount: amount,
            recipientWalletAddress: recipientWalletAddress,
            taxDocument: req.file.path,
            type: type,
        });

        return useSuccessResponse(
            res,
            transferRequestSuccessMessage.Created,
            tranferRequst,
            200
        );
    } catch (e) {
        console.log(e);
        return useErrorResponse(res, e.message, 429);
    }
});










module.exports = {
    createTranferRequest
};
