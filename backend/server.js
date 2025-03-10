const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const {connect} = require("./models/config/connect");
// Routers
const taskRouter = require("./routes/taskRouter");
const userRouter = require("./routes/userRoute");

//Environment variable
const current_port = process.env.PORT;
//Connect to <task-management-application> Database
connect;

//Config
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,               
    optionsSuccessStatus: 200 
}));

//Routing
app.use("/tasks", taskRouter);
app.use("/auth", userRouter);

app.all('*', (req, res, next) => {
    return res.status(404).json({success: false, message: `Bad request !`});
});

app.listen(current_port, console.log(`Listening on PORT : ${current_port}...`));