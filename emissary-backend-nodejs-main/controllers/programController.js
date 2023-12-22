const asyncHandler = require("express-async-handler");
const generateWebToken = require("../utils/token/generateToken");
const { programSuccessMessage } = require("../utils/responseMessages/success");

const {
    useErrorResponse,
    useSuccessResponse,
} = require("../utils/apiResponse/apiResponse");



// Importing Model
const ProgramModel = require("../models/ProgramModel");
const UserModel = require("../models/UserModel");



const createProgram = asyncHandler(async (req, res) => {
    try {
        const { name, emissaryId, nftAutoRequestSubmission, tokenGatedNFTContractAddress, tokenGatedNFTProgram, description, nftRedemption, symbol, title, autoNFTContractAddress, autoNFTContractRequestAmount, autoNFTContractRequestCurrency } = req.body;

        const user = await UserModel.findOne({
            _id: req.user._id,
        })

        const program = await ProgramModel.create({
            name: name,
            ownerId: user._id,
            ownerAddress: user.userAddress,
            emissaryId: emissaryId,
            nftAutoRequestSubmission: nftAutoRequestSubmission,
            tokenGatedNFTContractAddress: tokenGatedNFTContractAddress,
            tokenGatedNFTProgram: tokenGatedNFTProgram,
            description: description,
            nftRedemption: nftRedemption,
            symbol: symbol,
            title: title,
            nftImage: req?.file?.path,
            autoNFTContractAddress: autoNFTContractAddress,
            autoNFTContractRequestAmount: autoNFTContractRequestAmount,
            autoNFTContractRequestCurrency: autoNFTContractRequestCurrency
        });

        return useSuccessResponse(
            res,
            programSuccessMessage.Created,
            program,
            200
        );
    } catch (e) {
        console.log(e);
        return useErrorResponse(res, e.message, 429);
    }
});


const getEmissaryPrograms = asyncHandler(async (req, res) => {
    const { emissaryId } = req.body;

    const programs = await ProgramModel.find({
        emissaryId: emissaryId
    })

    if (!programs) {
        return useErrorResponse(res, "Programs not found", 429)
    }

    return useSuccessResponse(res, "Programs Fetched Successfully", programs, 200)
})







module.exports = {
    createProgram,
    getEmissaryPrograms
};
