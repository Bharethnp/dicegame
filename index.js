var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImages1 = "dice" + randomNumber1 + ".png";


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImages1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImages2 = "dice" + randomNumber2 + ".png";


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImages2);

if(randomImages1 > randomImages2){

    document.querySelector("h1").innerHTML = "Player 1 Wins! 🤩";
} else if(randomImages2 > randomImages1){

    document.querySelector("h1").innerHTML = "Player 2 Wins! 🤩";
} else {
    document.querySelector("h1").innerHTML = "It's a draw! 🍻";
}



