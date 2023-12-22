const mongoose = require("mongoose");
const { roles, access } = require("../utils/enums");
const emissarySchema = mongoose.Schema(
    {
        ownerAddress: {
            type: String,
            required: [true, "Owner Address is required"],
        },
        ownerId: {
            type: String
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        url: {
            type: String,
            // unique: true,
        },
        uniqueCode: {
            type: String,
            unique: true,

        },
        logo: {
            type: String,
            required: true,
        },
        access: {
            type: String,
            required: true,
            enum: Object.values(access),
            default: access.Public
        },
        nftContractAddress: {
            type: String
        },
        lastLogin: {
            type: Date,
            default: null
        },
        asset: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        emissaryUsers: {
            type: Array
        }
    },
    {
        timestramps: true,
    }
);



const EmissaryModel = mongoose.model("emissary", emissarySchema);

module.exports = EmissaryModel;