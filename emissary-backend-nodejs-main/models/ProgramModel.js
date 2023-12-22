const mongoose = require("mongoose");
const { access } = require("../utils/enums");

const programSchema = mongoose.Schema(
    {
        ownerAddress: {
            type: String,
            required: [true, "Owner Address is required"],
        },
        ownerId: {
            type: String
        },
        emissaryId: {
            type: String
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        access: {
            type: String,
            required: true,
            enum: Object.values(access),
            default: access.Public
        },
        tokenGatedNFTProgram: {
            type: Boolean,
            default: false
        },
        tokenFatedNFTContractAddress: {
            type: String,
        },
        nftRedemption: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        symbol: {
            type: String,
        },
        nftImage: {
            type: String
        },
        nftAutoRequestSubmission: {
            type: Boolean,
            default: false
        },
        autoNFTContractAddress: {
            type: String
        },
        autoNFTContractRequestAmount: {
            type: String
        },
        autoNFTContractRequestCurrency: {
            type: String
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestramps: true,
    }
);



const ProgramModel = mongoose.model("program", programSchema);

module.exports = ProgramModel;