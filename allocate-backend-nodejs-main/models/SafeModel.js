const mongoose = require("mongoose");
const { access, status } = require("../utils/enums");

const safeSchema = mongoose.Schema(
    {
        userId: {
            type: String
        },
        ownerAddress: {
            type: String,
            required: [true, "Owner Address is required"],
        },

        safeId: {
            type: String,
            require: [true, "Safe Address is required"],
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        desc: {
            type: String,
            required: [true, "Desc is required"],
        },
        emissaryId: {
            type: String
        },
        asset: {
            type: String,
            // required: [true, "Asset is required"],
        },
        recipientWalletAddress: {
            type: String,
            required: [true, "Recipient Wallet Address is required"],
        },
        amount: {
            type: Number
        },
        approversCount: {
            type: Number,
            default: 0,
            max: 5
        },
        status: {
            type: String,
            required: true,
            enum: Object.values(status),
            default: "Pending"
        },
        lumSumRelease: {
            type: Boolean,
            // required: true,
        },
        lumSumReleaseAmount: {
            type: Number,
            // required: true
        },
        mileStoneRelease: {
            type: Boolean,
            // required: true
        },
        mileStoneReleaseAmount: {
            type: Number,
            // required: true
        },
        assetTranferMode: {
            type: Boolean,
            default: false,
        },
        approvers: {
            type: Array,
            required: true,
        },
        approvedCount: {
            type: Number,
            default: 0,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        createdDate: {
            type: Date,
            default: Date.now()
        },
    },
    {
        timestramps: true,
    }
);



const SafeModel = mongoose.model("safes", safeSchema);

module.exports = SafeModel;