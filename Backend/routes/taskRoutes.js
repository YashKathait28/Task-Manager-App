const express = require("express");
const router = express.Router();
const {createTask, showTask, deleteTask, updateTask, getTask} = require("../controllers/taskControllers");
const userAuth = require("../middlewares/authMiddleware");

// Post request for creating the task
router.post("/createTask", userAuth, createTask);

// Get reqest for showing all the tasks
router.get("/getTask", userAuth, showTask);

// Get request for specific task
router.get("/getTask/:id", userAuth, getTask)

// Patch request for updating a specific task
router.patch("/editTask/:id", userAuth, updateTask);

// Delete request for deleting a specific task
router.delete("/deleteTask/:id", userAuth, deleteTask);

module.exports = router;