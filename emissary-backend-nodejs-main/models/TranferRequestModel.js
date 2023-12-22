const mongoose = require("mongoose");
const { access, status, tranferType } = require("../utils/enums");

const tranferRequestSchema = mongoose.Schema(
    {
        userAddress: {
            type: String,
            required: [true, "Owner Address is required"],
        },
        programName: {
            type: String,
            // require: [true, "Program Name is required"],
        },
        projectName: {
            type: String,
            required: [true, "Project Name is required"],
        },
        programId: {
            type: String
        },
        amount: {
            type: Number,
            required: [true, "Amount is required"],
        },
        type: {
            type: String,
            required: true,
            enum: Object.values(tranferType),
        },
        status: {
            type: String,
            // required: true,
            enum: Object.values(status),
            default: "Pending"
        },
        taxDocument: {
            type: String,
            // required: [true, "Tax Document is required"],
        },
        recipientWalletAddress: {
            type: Array
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



const TranferRequestModel = mongoose.model("tranferRequest", tranferRequestSchema);

module.exports = TranferRequestModel;