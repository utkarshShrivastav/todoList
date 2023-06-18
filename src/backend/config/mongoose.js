// Requiring the library 
const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/todo_list");
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to db"));
db.once('open', function () {
    console.log("Successfully connected");
})