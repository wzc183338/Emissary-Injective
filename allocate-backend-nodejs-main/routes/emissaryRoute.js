const express = require('express');
const route = express.Router();

// Controllers
const {
    createEmissary, getUserEmissary, getEmissary, getEmissaryWithUniqueCode, updateUserEmissary
} = require('../controllers/emissaryController');




//  middlwares
const {
    checkValidationMiddleware,
} = require('../middlewares/validationMiddleware');
const setupUploadMiddleware = require('../middlewares/imageUploadingMiddleware');

// check user middleware
const { protectRoute, protectVerificationRoute, isAdmin, isSuperAdmin } = require('../middlewares/authMiddleware');

// User Routes
route.post('/create-emissary', protectRoute, setupUploadMiddleware, createEmissary);
route.get('/get-user-emissaries', protectRoute, getUserEmissary);
route.post('/get-emissary', protectRoute, getEmissary);
route.post("/get-emissary-with-unique-code", protectRoute, getEmissaryWithUniqueCode)
route.post("/update-user-emissary", protectRoute, setupUploadMiddleware, updateUserEmissary)






module.exports = route;
