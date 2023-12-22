const express = require('express');
const route = express.Router();

// Controllers
const {
    createSafe, getUserSafes, getUserSafeById, getApproversBySafe, approveSafeByUser, getSafeByEmissaryId
} = require('../controllers/safeController');




//  middlwares
const {
    checkValidationMiddleware,
} = require('../middlewares/validationMiddleware');
const setupUploadMiddleware = require('../middlewares/imageUploadingMiddleware');

// check user middleware
const { protectRoute, protectVerificationRoute, isAdmin, isSuperAdmin } = require('../middlewares/authMiddleware');

// User Routes
route.post('/create-safe', protectRoute, createSafe);
route.post('/get-user-safes', protectRoute, getUserSafes);
route.post('/get-safe-by-id', protectRoute, getUserSafeById);
route.post('/get-safe-approvers', protectRoute, getApproversBySafe);
route.post('/user-approve-safe', protectRoute, approveSafeByUser);
route.post("/get-safe-by-emissary-id", protectRoute, getSafeByEmissaryId)






module.exports = route;
