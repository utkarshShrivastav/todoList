const express = require("express");
const pages = require("../controller/htmlController");
const router = express.Router();

router.get("/",pages.homePage);

module.exports = router;