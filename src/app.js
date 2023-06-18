// acquiring required libraries
const express = require("express");
const path = require("path");
const port = 9000;
const routes = require("./backend/routes/htmlRoutes");
const bodyParser = require("body-parser");
const db = require("./backend/config/mongoose");
const app = express();

// EJS
app.set("views",path.join(__dirname,"./client/views"));
app.set("view engine", "ejs");

// Express Static
app.use(express.static(path.join(__dirname,"./client")));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/",routes);

//Setting and Firing up the server
app.listen(port,err=>{
    if(err){
        console.log(err);
    }

    console.log("Server is up and running on port :",port);
});