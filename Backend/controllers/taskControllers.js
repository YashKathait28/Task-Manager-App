const express = require("express");
const task = require("../models/taskModel");

// Create task post request
const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Please enter the title!",
      });
    }

    const newTask = await task.create({
      title: title,
      description: description,
    });

    return res.status(201).json({
      message: "Your task is created successfully!",
      tasks: newTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create the task!",
      error: error.message,
    });
  }
};

// Show tasks get request
const showTask = async (req, res) => {
//   const {title, description} = req.body;

  try {
    const showTasks = await task.find({});

    return res.status(200).json({
      message: "Successfully showing all the tasks!",
      tasks: showTasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to show all the tasks!",
      error: error.message,
    });
  }
};

// Get Specific task get request
const getTask = async (req, res) => {
  const {id} = req.params;
  try{
    const getTasks = await task.findById(id);
    if(!getTasks){
      return res.status(400).json({message: "Task not found"})
    }
    return res.status(200).json({
      message: "Successfully showing one task!",
      tasks: getTasks,
    });

  } catch(error){
    return res.status(400).json({
      message: "Task not found!",
      error: error.message
    })   
  }
}

// Delete a specific task delete request
const deleteTask = async (req, res) => {
  const {id} = req.params;

  try {
    const deletedTask = await task.findByIdAndDelete(id);

    if (!deletedTask){
        return res.status(400).json({
            message: "Task not found!"
        });
    }

    return res.status(200).json({
      message: "Successfully deleted task!",
      tasks: deletedTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete task!",
      error: error.message,
    });
  }
};

// Update a specific task patch request
const updateTask = async (req, res) => {
  const {id} = req.params;
  const {title, description, completed} = req.body;

  try {
    const updatedTask = await task.findByIdAndUpdate(
      id,
      {$set: req.body},
      {new: true, runValidators: true}
    );

    if(!updatedTask){
        return res.status(404).json({message: "Task not found!"});
    }

    return res.status(200).json({
      message: "Successfully updated task!",
      tasks: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update task!",
      error: error.message,
    });
  }
};

module.exports = { createTask, showTask, deleteTask, updateTask, getTask};
