
let playerOne = true;

let boxes = document.querySelectorAll('.box');

const grid = document.querySelector('.grid-container').addEventListener
('click', (e) => {
  if(playerOne){
    addX(e.target);  
  } else {
    addO(e.target);    
  }    
});

function addX(x){
  if(x.textContent === ''){  
    x.textContent = 'X';
    x.classList.add('x');
    x.classList.remove('o');
    playerOne = false;     
  }
};

function addO(o){
  if (o.textContent === ''){
    o.textContent = 'O';
    o.classList.add('o');
    o.classList.remove('x');
    playerOne = true;    
  }
};

const resetBtn = document.querySelector('.reset').addEventListener('click', clearGrid);

function clearGrid() {
  boxes.forEach(box => {
    box.textContent = '';    
  })
  // switchTurns();
};

// const nextTurn = document.querySelector('.button-container');

// function switchTurns() {  
//   let xTurn = document.createElement('p');
//   xTurn.innerHTML = 'O goes first!';
//   nextTurn.appendChild(xTurn);
// };





