function getCells () {
    const cells = document.querySelectorAll('.game-cell');
    return cells;
};


function addEventListenerTo(elements) {
    for (element of elements) {
        element.addEventListener('click', handleClick);
    };
};


function handleClick(event) {
    
    handlePlayerTurn();
    
    if (gameCanContinue()) {
        console.log('game can continue');
    } else {
        console.log('game cannot continue');
    };
};


function handlePlayerTurn() {
    
    if (playerOneTurn) {
        if (!fieldIsTaken()) {
            event.target.innerText = "x";
            playerOneTurn = false;
        };
    } else {
        if (!fieldIsTaken()) {
            event.target.innerText = "o";
            playerOneTurn = true;
        };
    };
};


function fieldIsTaken() {
    if (event.target.innerText) {
        return true;
    } else {
        return false;
    };
};


function gameCanContinue() {
    if (!emptyCellsLeft()){
        return false;
    };
    return true;
}


const emptyCellsLeft = function () {
    const cells = getCells();
    for (cell of cells) {
        if (!cell.innerText) {
            return true;
        }
    }
    return false;
}


function game() {
    addEventListenerToCells();
     
    let playerWon = false;
    
    /*while (!playerWon) {
        continue;
    };*/
    
};

const gameCells = getCells();

addEventListenerTo(gameCells);

let playerOneTurn = true; 

/*const cellYCoordinate = event.target.dataset.coordinateY;
const cellXCoordinate = event.target.dataset.coordinateX;
event.target.innerText = "x";
switchPlayer();*/