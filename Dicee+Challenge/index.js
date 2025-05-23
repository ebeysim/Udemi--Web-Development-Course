function compare(number1, number2)
{
    if(number1>number2){document.querySelector("h1").innerText="Player 1 is the winner!";}
    else if(number1<number2){document.querySelector("h1").innerText="Player 2 is the winner!";}
    else{document.querySelector("h1").innerText="Draw!";}
}
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);

var randomDiceImg1="./images/dice"+randomNumber1+".png";
var img1=document.querySelector(".img1");
img1.setAttribute("src", randomDiceImg1);

var randomDiceImg2="./images/dice"+randomNumber2+".png";
var img2=document.querySelector(".img2");
img2.setAttribute("src", randomDiceImg2);
compare(randomNumber1, randomNumber2);