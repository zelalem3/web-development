const express = require('express');
const app = express();
app.get("/", function(request,response)
{
  response.send("<h1>hello</h1>")
})
app.get("/about", function(req,res)
{
  res.send("<h1>My name is zelalem</h1>");
}
)


app.listen(3000, function()
{
  console.log("server started on port 3000");
});
