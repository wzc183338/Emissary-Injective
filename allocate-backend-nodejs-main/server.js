const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { createServer } = require("http");
const morgan = require('morgan');



// Importing Modules  
const connectDB = require("./config/db.js");




dotenv.config();
connectDB();
const app = express();
const httpServer = createServer(app);



// Cor's Option

const corsOptions = {
    origin: "*",
    "Access-Controll-Allow-Origin": "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'))
app.get("/", (req, res) => {
    res.send("API's Are Running");
});

app.use("/api/user", require("./routes/userRoute.js"))
app.use("/api/emissary", require("./routes/emissaryRoute.js"))
app.use("/api/emissary-role", require("./routes/emissaryRoleRoute.js"))
app.use("/api/program", require("./routes/programRoute.js"))
app.use("/api/safe", require("./routes/safeRoutes.js"))
app.use("/api/tranfer-request", require("./routes/tranferRequestRoute.js"))



const PORT = process.env.PORT || 8000;

httpServer.listen(
    PORT,
    console.log(`Server is Running on ${process.env.NODE_ENV} at port ${PORT}`)
);
