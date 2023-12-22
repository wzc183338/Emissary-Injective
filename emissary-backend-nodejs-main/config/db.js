const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGOURI);
        console.log(`DataBase Connected at ${connect.connection.host}`);
    } catch (error) {
        console.log(error)
        console.log("DataBase connection error");
        process.exit(1);
    }
};

module.exports = connectDB;
