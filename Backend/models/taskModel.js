const mongoose = require("mongoose");
const userModel = require("./authModel");

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,ac
    },
    completed: {
        type: Boolean,
        default: false,
    }
},  {
    timestamps: true,
}
);

const task = mongoose.model("task", taskSchema);

module.exports = task;