var randomNumber1 = Math.floor(Math.random()*6) + 1
var randomImage = "dice" + randomNumber1 + ".png";
var randomImage2 = ".//images/" + randomImage
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage2)


var randomNumber2 = Math.floor(Math.random()*6)+1 
var randomImageOri = ".//images/dice" + randomNumber2 + ".png"
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",randomImageOri)

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 won"
}else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "player 2 won"
}
else { document.querySelector("h1").innerHTML = "draw"
}     
