const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
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