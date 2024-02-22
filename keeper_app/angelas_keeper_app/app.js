import bodyparser from "body-parser";
import mongoose from "mongoose";
import express from "express";


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/kepper", {useNewUrlParser: true});

const noteschema={
  title: String,
  content: String
};


const note = mongoose.model("note", noteSchema);





app.listen(5000, function() {
  console.log("Server started on port 3000");
});
