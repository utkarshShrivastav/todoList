// acquiring required library
const mongoose = require("mongoose");

// creting schema to store data in structured fashion inta database
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