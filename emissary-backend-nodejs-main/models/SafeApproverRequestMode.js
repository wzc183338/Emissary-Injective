const mongoose = require("mongoose");
const { access, status } = require("../utils/enums");

const safeApproverSchema = mongoose.Schema(
    {
        approverId: {
            type: String,
            required: [true, "Approver Id is required"],
        },
        approverAddress: {
            type: String,
            require: [true, "Approver Address is required"],
        },
        emissaryId: {
            type: String,
            required: [true, "Emissary Id is required"],
        },
        safeId: {
            type: String,
            required: [true, "Safe Id is required"],
        },
        status: {
            type: String,
            required: true,
            enum: Object.values(status),
            default: status.PENDING
        },
        signedTime: {
            type: Date
        }
    },
    {
        timestramps: true,
    }
);



const SafeApproverModel = mongoose.model("safeApprovers", safeApproverSchema);

module.exports = SafeApproverModel;