const mongoose = require("mongoose");
const { access, roles } = require("../utils/enums");
const emissaryRoleSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            // type: mongoose.Schema.ObjectId,
            required: [true, "User Id is required"],
            // ref: "user"
        },
        userAddress: {
            type: String,
            required: true
        },
        emissaryId: {
            type: String,
            // type: mongoose.Schema.ObjectId,
            required: [true, "Emissary Id is required"],
            // ref: "emissary"
        },
        roleType: {
            type: String,
            required: true,
            enum: Object.values(roles)
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



const EmissaryRoleModel = mongoose.model("emissaryRoles", emissaryRoleSchema);

module.exports = EmissaryRoleModel;