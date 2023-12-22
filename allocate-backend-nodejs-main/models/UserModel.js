const mongoose = require("mongoose");
const { roles } = require("../utils/enums");;
const userSchema = mongoose.Schema(
    {
        userAddress: {
            type: String,
            unique: true,
            required: [true, "Address is required"],
        },
        role: {
            type: String,
            required: true,
            enum: Object.values(roles),
            default: roles.REGULAR
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestramps: true,
    }
);


const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;