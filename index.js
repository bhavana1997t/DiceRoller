var random1 = Math.floor(Math.random() * 6) + 1;
var randimg1 = "dice" + random1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randimg1);

var random2 = Math.floor(Math.random() * 6) + 1;
var randimg2 = "dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randimg2);

if (random1 > random2) {
    document.querySelector("h1").innerHTML = "⛳Player1 Wins...!";
} else if (random2 > random1) {
    document.querySelector("h1").innerHTML = "⛳Player2 Wins...!";
} else if (random1 === random2) {
    document.querySelector("h1").innerHTML = "Draw";
}