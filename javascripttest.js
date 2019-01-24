//create a prompt and define variable
let game = prompt("Would you like to play a game? (Type: yes or no)")
let win = 0;
let nameHP = 40;
let GrantHP = 10;
if (game === "yes") {
    let name = prompt("What is your name?");
    //the main win condition is win the user has 3 wins
    while (nameHP >=0 && GrantHP > 0) {
    console.log(`${name} has ${nameHP} HP left and Grant has ${GrantHP} HP left`)
    //check the players HP
        if (nameHP >= 1) {
        //take away health from both grant and name
        nameHP -= Math.floor(Math.random()*2) +1;
        GrantHP -= Math.floor(Math.random()*2) +1;
        //check Grants HP
            if(GrantHP <= 0 && win === 2) {
            //grants hp is zero and you have 2 wins, therefore you win
            console.log("You win");
            //if grants HP is set to zero, but you dont have
            //two wins, then you need to set it to zero
            //and increase your wins
            } else if (GrantHP <=0) {
            console.log("You Win");
            GrantHP = 10;
            win++;
        }
        //playes hp runs to 0, you lost the game
    }   else  if  (nameHP >= 0) {
            console.log("You lost the game")
            break;
    }
}//would you like to play again prompt?
function playAgain() {
 let game = prompt("Would you like to play again? (Type: yes or no)")
 if (game === "yes") {
    let name2 = prompt("What is your name?");
    alert("Sorry I'm tired, but another time!");
} else {
    console.log("That's fine, we can play another time");
    }
}

//if you type in no you will get this response to the console

} else {
  console.log("We can play another time");
}