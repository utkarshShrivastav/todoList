const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:false,
    },
    date:{
        type:Date,
        required:true,
    },
})

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;