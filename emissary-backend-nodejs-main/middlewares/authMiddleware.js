const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
// error messages
const {
    authMiddleWareErrorMessages,
} = require("../utils/responseMessages/error");
const { roles } = require("../utils/enums");

// models
const UserModel = require("../models/UserModel");
//
const { useErrorResponse } = require("../utils/apiResponse/apiResponse");

const protectRoute = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const user = await UserModel.findById(decodedToken.id);
            if (!user) throw new Error("user not found");
            //   if (user.isDeleted) throw new Error("user deleted");
            //   if (!user.isActive) throw new Error("user not active");
            req.user = user;
            next();
        } catch (error) {
            console.log(error);
            return useErrorResponse(
                res,
                authMiddleWareErrorMessages.InValidToken,
                498
            );
        }
    }

    if (!token) {
        return useErrorResponse(
            res,
            authMiddleWareErrorMessages.TokenNotFound,
            401
        );
    }
});

const protectVerificationRoute = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const user = await UserModel.findById(decodedToken.id);
            if (!user) throw new Error("user not found");
            if (user.isDeleted) throw new Error("user deleted");
            if (user.isActive) throw new Error("user already active");
            req.user = user;
            next();
        } catch (error) {
            console.log(error);
            return useErrorResponse(
                res,
                authMiddleWareErrorMessages.InValidToken,
                498
            );
        }
    }

    if (!token) {
        return useErrorResponse(
            res,
            authMiddleWareErrorMessages.TokenNotFound,
            401
        );
    }
});

const isAdmin = asyncHandler(async (req, res, next) => {
    // find role id of 'Admin'
    if (!req.user || !req.user.role) {
        return useErrorResponse(res, authMiddleWareErrorMessages.RoleNotFound, 404);
    }

    if (!req.user.role) {
        return useErrorResponse(res, authMiddleWareErrorMessages.RoleNotFound, 404);
    }

    if (![roles.ADMIN, roles.SUPER_ADMIN].includes(req.user.role)) {
        return useErrorResponse(
            res,
            authMiddleWareErrorMessages.UnAuthorizedAdmin,
            404
        );
    }
    next();
});

module.exports = {
    protectRoute,
    isAdmin,
    protectVerificationRoute,
};
