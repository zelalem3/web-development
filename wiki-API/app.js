const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser:true});

const articleschema = ({
  title: String,
  content: String

})
const articles = mongoose.model("article", articleschema);
const titleschema = ({
  title: String
})
const articletitle = mongoose.model("title", titleschema);
const name = new articles({
  title: "Article3",
  content: "This is the first article"
})


app.route("/articles/:articlename")
  .get(function(req, res)
{
  const art = articles.findOne({title: req.params.articlename});
  console.log(art);
});


app.get("/articles", function(req,res)
{

  res.send(articles.find());
});

app.post("/articles", function(req,res)
{
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);
});

app.listen(3000, function(req,res)
{
  console.log("Server started on port 3000");
})
