const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const https = require("https");

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apikey = "b16e7246aa86b55a761b16ae75b1a6bb";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + units;

  https.get(url, function(response) {
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const image =  "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celsius</h1><br>");
      res.write("<img src=" + image + ">");
      res.send();
    });
  });
});

app.listen(3000, function() {
  console.log("The server is running on port 3000");
});
