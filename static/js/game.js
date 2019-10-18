function handleClick(event) {
    handlePlayerTurn();
} 


function addEventListenerTo(elements) {
    for (element of elements) {
        element.addEventListener('click', handleClick);
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


function getCells () {
    const cells = document.querySelectorAll('.game-cell');
    return cells;
};


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