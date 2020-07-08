const battleship = () => {

  // ## Step 1: Create Players

let playerOne = {
  name: prompt("playerOne - What is your first name?"),
  shipCount: parseInt(4),
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ]
}

let playerTwo = {
  name: prompt("playerTwo - What is your first name?"),
  shipCount: parseInt(4),
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ]
}

//## Step 2: Randomly Add Ships to each Board

//PlayerOne add ships to the existing array
let shipPlacePlayerOne = 0;

for (var i = 0; i < 4; i++) {

 let xCoordinateOne = Math.floor( Math.random() * (3 - 0 + 1) + 0);
 let yCoordinateOne = Math.floor( Math.random() * (3 - 0 + 1) + 0);

 console.log (xCoordinateOne, yCoordinateOne);

 if (playerOne.gameBoard[xCoordinateOne][yCoordinateOne] === 0) {
    playerOne.gameBoard[xCoordinateOne][yCoordinateOne] = 1;
    shipPlacePlayerOne +=1;
 } 
}
// show PlayerOne X and Y coordinates
console.log (JSON.stringify(playerOne.gameBoard));

// PlyaerTwo add ships to the existing array
let shipPlacePlayerTwo = 0;

for (var i = 0; i < 4; i++) {

 let xCoordinateTwo = Math.floor( Math.random() * (3 - 0 + 1) + 0);
 let yCoordinateTwo = Math.floor( Math.random() * (3 - 0 + 1) + 0);

 console.log (xCoordinateTwo, yCoordinateTwo);
 
 if (playerTwo.gameBoard[xCoordinateTwo][yCoordinateTwo] === 0) {
    playerTwo.gameBoard[xCoordinateTwo][yCoordinateTwo] = 1;
    shipPlacePlayerTwo +=1;
 } 
}
// show PlayerTwo X and Y coordinates
console.log (JSON.stringify(playerTwo.gameBoard));
// show info in objects : PlayerOne and PlayerTwo
console.log(playerOne, playerTwo);

//## Step 3: Start the Game Play

let currentPlayer = playerOne.name;
let message;
let continueGame;

while (!message) {  

  // PlayerOne

  if (currentPlayer === playerOne.name ) {

//    ### Step 3a: Ask the PlayerOne to Choose Strike Coordinates

    let xCoordinateStrike = +prompt(`${currentPlayer}, please choose an X coordinate to strike from 0 to 3`);
    let yCoordinateStrike = +prompt(`${currentPlayer}, please choose an Y coordinate to strike from 0 to 3`);

 // ### Step 3b: Determine if the Player Sink their Opponent's Ship
 // if the guesing coordinate is right, change the value from 1 to 0 and decrement the ship count

    if (playerTwo.gameBoard[xCoordinateStrike][yCoordinateStrike] === 1) {
          playerTwo.gameBoard[xCoordinateStrike][yCoordinateStrike] = 0;
          playerTwo.shipCount -=1;
// show info in object : PlayerTwo
          console.log(playerTwo.name);
          console.log (JSON.stringify(playerTwo.gameBoard));
          alert("Hint!");

// if the guessing coordinate wrong, ask question and switch the players between each other         
    } else {
      alert("Miss!");
// confirm the continue of game    
      continueGame = confirm("Would you like to continue?");
        if (!continueGame) {
          alert ("Stop Game");
          return `Stop Game by ${currentPlayer}`;
        }
      currentPlayer = playerTwo.name;  
    }

// ### Step 3c: Check if the Opponent has Any Ships Left  
// ## Step 4: End the Game Play  

// if the PlayerTwo ship count is 0, then PlayerOne win

   if (playerTwo.shipCount === 0) {
      message = playerOne.name;
    } 
  } 

// PlayerTwo

if (currentPlayer === playerTwo.name) {

  //    ### Step 3a: Ask the Player to Choose Strike Coordinates
  
      let xCoordinateStrike = +prompt(`${currentPlayer}, please choose an X coordinate to strike`);
      let yCoordinateStrike = +prompt(`${currentPlayer}, please choose an Y coordinate to strike`);

   // ### Step 3b: Determine if the Player Sunk their Opponent's Ship
   // if the guesing coordinate is right, change the value from 1 to 0 and decrement the ship count

      if (playerOne.gameBoard[xCoordinateStrike][yCoordinateStrike] === 1) {
            playerOne.gameBoard[xCoordinateStrike][yCoordinateStrike] = 0;
            playerOne.shipCount -=1;
 // show info in object : PlayerOne
            console.log(playerOne.name);
            console.log (JSON.stringify(playerOne.gameBoard));
            alert("Hint!");

  // ### Step 3c: Check if the Opponent has Any Ships Left   
  // if the guessing coordinate wrong, ask question and switch the players between each other  
      }  else {
        alert("Miss!");
  // confirm the continue of game      
        continueGame = confirm("Would you like to continue?");
          if (!continueGame) {
            alert ("Stop Game");
            return `Stop Game by ${currentPlayer}`;
          }
        currentPlayer = playerOne.name;
      }

  // ## Step 4: End the Game Play  
  // if the PlayerOne ship count is 0, then PlayerTwo win

   if (playerOne.shipCount === 0) {
    message = playerTwo.name;
   }
  }
    
}    
// show info in objects : PlayerOne and PlayerTwo
  console.log(playerOne, playerTwo);
  return `The winner is ${message}!`
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
