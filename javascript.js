//initialize variables for win, nameHP, and Grant'sHP
let win = 0;
let nameHP = 40;
let GrantHP = 10;

//start the game prompt function
function startGame() {
    let game = prompt("Would you like to play a game? (Type: yes or no)");
    if (game === "yes") {
        let name = prompt("What is your name?");
        //start the while loop, startCombat function
        startCombat();
        //prompt to play again
        playAgain();
    } else { 
        console.log("We can play another time");
    }
}

//start the combat function, previous while loop
function startCombat() {
    //will keep running until nameHP hits zero, and GrantHP reaches zero
    while (nameHP >=0 && GrantHP > 0) {
        console.log(`${name} has ${nameHP} HP left and Grant has ${GrantHP} HP left`)
        //check the players HP
            if (nameHP >= 1) {
            //prompt the user whether to attack or quit
                let attack = prompt("attack or quit?");
                if (attack === "attack") {
                    //take away HP
                    nameHP -= getDamage();
                    GrantHP -= getDamage();
                } else { 
                    //play another time and stop the code
                    console.log("We can play another time");
                    //stop the code in the if attack loop, and exits out of the while loop
                    break;
                }
                //call the function so you getDamage value
                // getDamage();
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
                //stop the code in the the while loop, goes to return
                break;
        }
    }
    //returns you to the previous function - line 12
    return;
}

//dmg function loop
function getDamage() {
    return Math.floor(Math.random()*5) +1;   
}

//would you like to play again prompt function
function playAgain() {
    let game = prompt("Would you like to play again? (Type: yes or no)")
    if (game === "yes") {
       let name2 = prompt("What is your name?");
       alert("Sorry I'm tired, but another time!");
   } else {
       console.log("That's fine, we can play another time");
       }
}

//start the game prompt
startGame();