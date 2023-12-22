const express = require('express');
const route = express.Router();

// Controllers
const { createTranferRequest } = require('../controllers/tranferRequestController');




//  middlwares
const {
    checkValidationMiddleware,
} = require('../middlewares/validationMiddleware');
const setupUploadMiddleware = require('../middlewares/imageUploadingMiddleware');

// check user middleware
const { protectRoute, protectVerificationRoute, isAdmin, isSuperAdmin } = require('../middlewares/authMiddleware');


// User Routes
route.post('/create-transfer-request', protectRoute, isAdmin, setupUploadMiddleware, createTranferRequest);






module.exports = route;
