var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImages1 = "dice" + randomNumber1 + ".png";
var randomImagesSource1 = "images/" + randomImages1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImagesSource1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImages2 = "dice" + randomNumber2 + ".png";
var randomImagesSource2 = "images/" + randomImages2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImagesSource2);

if(randomImagesSource1 > randomImagesSource2){

    document.querySelector("h1").innerHTML = "Player 1 Wins! 🤩";
} else if(randomImagesSource2 > randomImagesSource1){

    document.querySelector("h1").innerHTML = "Player 2 Wins! 🤩";
} else {
    document.querySelector("h1").innerHTML = "It's a draw! 🍻";
}



