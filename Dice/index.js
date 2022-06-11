var randomDicePlayer1 = Math.floor(Math.random()*6)+1;
var randomDicePlayer2 = Math.floor(Math.random()*6)+1;

var randomDice1 = "dice"+randomDicePlayer1+".png";
var randomDiceImg1 = "images/"+randomDice1;
document.querySelector("img.dicePlayer1").setAttribute("src",randomDiceImg1);

var randomDice2 = "dice"+randomDicePlayer2+".png";
var randomDiceImg2 = "images/"+randomDice2;
document.querySelector("img.dicePlayer2").setAttribute("src",randomDiceImg2);


// if(randomDicePlayer1===1)
// {
//     document.querySelector("img.dicePlayer1").setAttribute("src","images/dice1.png")
// }
// else if(randomDicePlayer1===2)
// {
//     document.querySelector("img.dicePlayer1").setAttribute("src","images/dice2.png")
// }
// else if(randomDicePlayer1===3)
// {
//     document.querySelector("img.dicePlayer1").setAttribute("src","images/dice3.png")
// }
// else if(randomDicePlayer1===4)
// {
//     document.querySelector("img.dicePlayer1").setAttribute("src","images/dice4.png")
// }
// else if(randomDicePlayer1===5)
// {
//     document.querySelector("img.dicePlayer1").setAttribute("src","images/dice5.png")
// }
// else
// {
//     document.querySelector("img.dicePlayer1").setAttribute("src","images/dice6.png")
// }

// if(randomDicePlayer2===1)
// {
//     document.querySelector("img.dicePlayer2").setAttribute("src","images/dice1.png");
// }
// else if(randomDicePlayer2===2)
// {
//     document.querySelector("img.dicePlayer2").setAttribute("src","images/dice2.png");
// }
// else if(randomDicePlayer2===3)
// {
//     document.querySelector("img.dicePlayer2").setAttribute("src","images/dice3.png");
// }
// else if(randomDicePlayer2===4)
// {
//     document.querySelector("img.dicePlayer2").setAttribute("src","images/dice4.png");
// }
// else if(randomDicePlayer2===5)
// {
//     document.querySelector("img.dicePlayer2").setAttribute("src","images/dice5.png");
// }
// else
// {
//     document.querySelector("img.dicePlayer2").setAttribute("src","images/dice6.png");
// }


if(randomDicePlayer1>randomDicePlayer2)
{
    document.querySelector("h1.winner").textContent="🚩 Player 1 Wins!";
}
else if(randomDicePlayer2>randomDicePlayer1)
{
    document.querySelector("h1.winner").textContent="Player 2! Wins 🚩";
}
else
{
    document.querySelector("h1.winner").textContent="🚩 Draw 🚩";
}