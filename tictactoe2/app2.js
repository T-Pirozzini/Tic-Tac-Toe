// USING FACTORY FUNCTIONS //

//PLAYER FACTORY
const playerFactory = (name, marker) => {
  return { name, marker };
};

//GAMEBOARD OBJECT
const gameBoard = (() => {
  //Generate gameboard array
  const board = [];
  for(i = 0; i < 9; i++){
    board.push('');     
  };

  //Create boxes for each array[i]
  const boxes = document.querySelector('.boxes');
  board.forEach((item, index) => {
    const box = document.createElement('div');
    box.className = 'box';
    boxes.appendChild(box);    
  });
  
  // Add event listeners to each box
  Array.from(boxes.children).forEach((box, index) => {
    box.addEventListener('click', () => {
      //display active player marker      
      box.classList.add(gameControl.activePlayer.marker);
      box.setAttribute('data', gameControl.activePlayer.marker);
      box.textContent = gameControl.activePlayer.marker;
      // update array value to be that of active player
      board[index] = gameControl.activePlayer.marker;
      // remove evegameBoard();nt listener from the marked index
      box.style.pointerEvents = 'none';
      // update remainingSpots
      gameControl.remainingSpots -= 1;
      // check winner: if all 3 values within any of these conditions are ===...
      gameControl.checkWinner();
      // check remaining spots
      if (gameControl.winnerDeclared == false) {
          if (gameControl.remainingSpots > 0) {
              gameControl.alertNextPlayer();
              gameControl.nextPlayer();
          } else if (gameControl.remainingSpots == 0) {
              gameControl.declareTie();
          }
      } 
    })
  })
  return {
    board
  }; 
})();


//GAME CONTROL OBJECT
const gameControl = (() => {

  //create players
  const playerOne = playerFactory('Player 1', 'x');
  const playerTwo = playerFactory('Player 2', 'o');  

  //initial variables
  let activePlayer = playerOne;
  let winnerDeclared = false;
  let remainingSpots = 9;

  //declare whos turn
  let subtext = document.querySelector('.subtext'); 
  let playerName = document.querySelector('.player-name'); 

  //winning combinations
  const winCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
      ];
  
  //check winner
  function checkWinner() {
    winCombos.forEach((item, index) => {
      if (gameBoard.board[item[0]] === this.activePlayer.marker 
        && gameBoard.board[item[1]] === this.activePlayer.marker 
        && gameBoard.board[item[2]] === this.activePlayer.marker) {
          subtext.innerHTML = `<b>${this.activePlayer.name} wins!</b>`;     
          this.winnerDeclared = true;                                             
      }
    })
  }
  // alert next player
  function alertNextPlayer() {
    this.activePlayer === playerOne ? playerName.textContent = 'Player 2' : playerName.textContent = 'Player 1';
}

  // next player
  function nextPlayer() {
      this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
  }

  // declare tie
  function declareTie() {
      subtext.innerHTML = "<b>Tie game!</b>";
  }

  // return
  return {
      activePlayer,
      remainingSpots,
      checkWinner,
      alertNextPlayer,
      nextPlayer,
      declareTie,
      winnerDeclared
    };
})();

//RESET GAME
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  location.reload();
})




