// acquire the library
const Task = require("../model/task");

// controller to navigate to the homepage
let homePage = (req,res)=>{
    Task.find({}).then((contacts)=>{
        console.log(contacts);
        res.render("home",{
            contacts,
        });
    }).catch(Err=>{
        console.log(Err);
        res.render("home",{
            contacts,
        });
    })
}

// controller to add task to the database
let addTask = (req,res)=>{
    Task.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    }).then(()=>{
        console.log("Task created");
        res.redirect("back");
    }).catch(err=>{
        console.log(err);
        res.redirect("back");
    })
}

// controller to delete particular task from database
let deleteTask = (req,res)=>{
    let id = req.query.id;
    Task.findByIdAndDelete(id).then(()=>{
        console.log("Deleted");
        res.redirect("back");
    }).catch(err=>{
        console.log("err",err);
        res.redirect("back");
    })
}

// controller to delete all tasks from database
let deleteAllTask = (req,res)=>{
    Task.deleteMany().then(()=>{
        console.log("All tasks deleted");
        res.redirect("back");
    })
}

// exporting all conrollers using key-value pairs
module.exports = {
    homePage,
    addTask,
    deleteTask,
    deleteAllTask,
}