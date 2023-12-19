$("h1").css("color", "red");

$("h1").on("mouseover", function()
{
  $("h1").css("color", "green");
})
$("button").on("click", function()
{
  $("h1").fadeToggle();
})
