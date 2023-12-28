const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();



app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/todolistDB");
const itemschema = mongoose.Schema(
  {
    name: String
  }
)


const model = mongoose.model("item", itemschema);


app.get("/", function(req,res)
{
  res.render("list");
})

// app.get("/work", function(req, res)
// {
//   res.render("list", {listTitle: , newListItems: workItems})
// })
app.get("/about", function(req, res){
  res.render("about");
});








app.listen(3000, function()
{
  console.log("website is running on port 3000");
})
