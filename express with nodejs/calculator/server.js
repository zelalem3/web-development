const express = require('express');
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extedned: true}));

app.get("/", function(req, res)
{
    res.sendFile(__dirname + "/bmicalculator.html");
})
app.post("/", function(req,res)
{
  var weight = Number(req.body.num1);
  var height = Number(req.body.num2);
  var BMI = weight / height ** 2;
  BMI = BMI.toFixed(2);
  res.send("You BMI is " + BMI);


})

app.listen(3000, function()
{
  console.log("This file is running on the port 3000");
})
