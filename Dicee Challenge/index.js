var random1 = Math.floor(Math.random() * 6 + 1);
var random2 = Math.floor(Math.random() * 6 + 1);
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.querySelector(".img2");
switch (random1) {
  case 1:
    img1.setAttribute("src", "images/dice1.png");
  case 2:
    img1.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    img1.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    img1.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    img1.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    img1.setAttribute("src", "images/dice6.png");
    break;
}
switch (random2) {
  case 1:
    img2.setAttribute("src", "images/dice1.png");
    break;
  case 2:
    img2.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    img2.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    img2.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    img2.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    img2.setAttribute("src", "images/dice6.png");
    break;
}
var select = document.querySelector("h1"); 
if (random1 > random2) {
  select.textContent = "Player 1 wins";
} else if (random2 > random1) {
  select.textContent = "player 2 wins";
} else {
  select.textContent = "It is a draw";
}
