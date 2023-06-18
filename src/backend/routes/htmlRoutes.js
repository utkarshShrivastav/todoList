// acquiring required libraries
const express = require("express");
const pages = require("../controller/htmlController");
const router = express.Router();

router.get("/",pages.homePage); //route to navigate to homepage
router.post("/addTask",pages.addTask);//route to navigate to add task to database
router.get("/deleteTask", pages.deleteTask);//route to navigate to delete one task from database
router.get("/deleteAllTask",pages.deleteAllTask);//route to navigate to delete all task from database

module.exports = router;