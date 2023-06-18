const express = require("express");
const path = require("path");
const port = 9000;
const routes = require("./backend/routes/htmlRoutes");
const app = express();

app.set("views",path.join(__dirname,"./client/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"./client")));

app.use("/",routes);

app.listen(port,err=>{
    if(err){
        console.log(err);
    }

    console.log("Server is up and running on port :",port);
});