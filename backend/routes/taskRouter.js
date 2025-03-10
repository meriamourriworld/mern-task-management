const express = require("express");
const taskRouter = express.Router();
const taskController = require("../controllers/taskController");
const { isAuth, isOwner } = require("../middlewares/middleware");



// Find All Tasks
taskRouter.get("/", isAuth, taskController.getAllTasks);

// Create a new task
taskRouter.post("/", isAuth, taskController.createTask);

// Delete a task
taskRouter.delete("/:id", isAuth, taskController.deleteTask);

// Update a task
taskRouter.put("/:id", isAuth, taskController.updateTask);

module.exports = taskRouter;