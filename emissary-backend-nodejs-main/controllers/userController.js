const asyncHandler = require("express-async-handler");
const generateWebToken = require("../utils/token/generateToken");
const { userSuccessMessages } = require("../utils/responseMessages/success");

const {
    useErrorResponse,
    useSuccessResponse,
} = require("../utils/apiResponse/apiResponse");



// Importing Model
const UserModel = require("../models/UserModel");



const registerUser = asyncHandler(async (req, res) => {
    try {
        const { userAddress, } = req.body;

        const userExists = await UserModel.findOne({ userAddress });


        if (userExists) {
            return useSuccessResponse(
                res,
                userSuccessMessages.Login,
                {
                    _id: userExists._id,
                    role: userExists.role,
                    address: userExists.userAddress,
                    token: generateWebToken(userExists._id),
                },
                200
            );
        } else {
            const user = await UserModel.create({
                userAddress: userAddress,
            });


            return useSuccessResponse(
                res,
                userSuccessMessages.Login,
                {
                    _id: user._id,
                    role: user.role,
                    address: user.userAddress,
                    token: generateWebToken(user._id),
                },
                200
            );
        }


    } catch (e) {
        console.log(e);
        return useErrorResponse(res, e.message, 429);
    }
});








module.exports = {
    registerUser
};
