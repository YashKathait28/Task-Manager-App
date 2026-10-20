const express = require("express");
const router = express.Router();
const {createTask, showTask, deleteTask, updateTask, getTask} = require("../controllers/taskControllers");

// Post request for creating the task
router.post("/createTask", createTask);

// Get reqest for showing all the tasks
router.get("/getTask", showTask);

// Get request for specific task
router.get("/getTask/:id", getTask)

// Patch request for updating a specific task
router.patch("/editTask/:id", updateTask);

// Delete request for deleting a specific task
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;