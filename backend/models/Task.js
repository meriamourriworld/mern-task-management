const mongoose = require("mongoose");
const { v4: uuid } = require('uuid');

const {Schema} = mongoose;

const TaskSchema = new Schema({
    title : 
    {
        type: String,
        required : [true, "Title is required !"],
        trim : true
    },
    description:
    {
        type: String,
        required: [true, "Task's description is required !"],
        trim : true
    },
    status:
    {
        type: String,
        enum : ["Pending", "In Progress", "Completed"],
        required: [true, "Task status is required !"]
    },
    dueDate:
    {
        type: Date,
        required: [true, "Due date is required !"]
    },
    userId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
});

module.exports.Task = mongoose.model("Task", TaskSchema);