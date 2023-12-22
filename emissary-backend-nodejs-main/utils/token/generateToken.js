const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateToken = (id) => {
    const token = jwt.sign({ id, expiresIn: '4h' }, process.env.JWT_SECRET);
    return token;
};

module.exports = generateToken;
