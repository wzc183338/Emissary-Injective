const express = require('express');
const route = express.Router();

// Controllers
const {
    AddEmissaryRole,
    GetAllEmissaryRole,
    deleteEmissaryRole
} = require('../controllers/emissaryRolesController');




//  middlwares
const {
    checkValidationMiddleware,
} = require('../middlewares/validationMiddleware');
const setupUploadMiddleware = require('../middlewares/imageUploadingMiddleware');
const { protectRoute, protectVerificationRoute, isAdmin, isSuperAdmin } = require('../middlewares/authMiddleware');


// User Routes
route.post('/add-emissary-role', setupUploadMiddleware, AddEmissaryRole);
route.post('/get-all-emissary-roles', protectRoute, GetAllEmissaryRole);
route.post("/delete-emissary-role", protectRoute, isAdmin, deleteEmissaryRole)





module.exports = route;
