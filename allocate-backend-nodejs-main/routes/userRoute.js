const express = require('express');
const route = express.Router();

// Controllers
const {
    registerUser

} = require('../controllers/userController');




//  middlwares
const {
    checkValidationMiddleware,
} = require('../middlewares/validationMiddleware');
const setupUploadMiddleware = require('../middlewares/imageUploadingMiddleware');

// check user middleware
const { protectRoute, protectVerificationRoute, isAdmin, isSuperAdmin } = require('../middlewares/authMiddleware');

// User Routes
route.post('/sign-in', registerUser);






module.exports = route;
