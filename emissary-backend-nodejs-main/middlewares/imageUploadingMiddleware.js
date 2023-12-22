// uploadMiddleware.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Set up Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUNDINARY_API_KEY,
    api_secret: process.env.CLOUNDINARY_API_SECRET_KEY,
});

const storage = new CloudinaryStorage({
    cloudinary,
    folder: 'uploads',
    params: {
        resource_type: 'auto'
    }
});

const parser = multer({ storage });

const setupUploadMiddleware = (req, res, next) => {
    parser.single('file')(req, res, (err) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(500).json({ message: "File not uploaded", error: err });
        }
        next();
    });
};

module.exports = setupUploadMiddleware;
