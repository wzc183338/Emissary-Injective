const express = require('express');
const route = express.Router();

// Controllers
const {
    createProgram, getEmissaryPrograms
} = require('../controllers/programController');




//  middlwares
const {
    checkValidationMiddleware,
} = require('../middlewares/validationMiddleware');
const setupUploadMiddleware = require('../middlewares/imageUploadingMiddleware');

// check user middleware
const { protectRoute, protectVerificationRoute, isAdmin, isSuperAdmin } = require('../middlewares/authMiddleware');

// User Routes
route.post('/create-program', protectRoute, setupUploadMiddleware, createProgram);
route.post('/get-programs-by-emissary', protectRoute, getEmissaryPrograms)






module.exports = route;
