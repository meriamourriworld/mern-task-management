const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/userController");
const { userValidation } = require("../middlewares/dataValidation");


// Register a new User
UserRouter.post("/register", userValidation, UserController.registerUser);
UserRouter.post("/login", userValidation, UserController.login);

module.exports = UserRouter;