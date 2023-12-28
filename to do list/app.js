//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require("./date.js");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

const itemschema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model("Item", itemschema);

const item1 = new Item({
  name: "Welcome to your todolist"
});

const item2 = new Item({
  name: "Hit the + button to add a new item"
});

const item3 = new Item({
  name: "<-- This is to delete an item"
});

const defaultItems = [item1, item2, item3];
const listschema = new mongoose.Schema({
  name: String,
  items: [itemschema]
});
const List = mongoose.model("List", listschema);



app.get("/", async function(req, res) {
  try {

    const foundItems = await Item.find();
    if(foundItems.length === 0)
      {
        Item.insertMany(defaultItems);
        res.redirect("/");

      }

    else{
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }


}
   catch (err) {
    console.log(err);
  }
});


app.post("/delete", function(req, res) {
  const checkedItemId = req.body.checkbox;
  const ListName =
  Item.deleteOne(checkedItemId);
  res.redirect("/");
});



app.get("/:customListName", function()
{

  const customListName = req.param.customListName;
  const List = new List({
    name: customListName,
    items:  defaultItems
  });
  List.save();
});





app.post("/", function(req, res){
  const itemName = req.body.newItem;
  const item = new Item({
    name: itemName
  })
  item.save();

  res.redirect("/");
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
