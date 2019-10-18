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
        console.log(moreThanTwo());
    } else {
        console.log('game cannot continue');
    };
};


function handlePlayerTurn() {
    
    if (playerXTurn) {
        if (!fieldIsTaken()) {
            event.target.innerText = "x";
            playerXTurn = false;
        };
    } else {
        if (!fieldIsTaken()) {
            event.target.innerText = "o";
            playerXTurn = true;
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


const moreThanTwo = () => {
    let countX = 0;
    let countO = 0;
    const cells = getCells();
    for (cell of cells) {
        if (cell.innerText === 'x') {
            countX++;
        } else if (cell.innerText === 'o') {
            countO++;
        }
        };
    if (countX > 2 || countO > 2) {
        return true;
    };
    return false;
};


const gameCells = getCells();

addEventListenerTo(gameCells);

let playerXTurn = true; 

/*const cellYCoordinate = event.target.dataset.coordinateY;
const cellXCoordinate = event.target.dataset.coordinateX;

/*function game() {
    addEventListenerToCells();
        
    let playerWon = false;
    
    while (!playerWon) {
        continue;
    };
    
};*/
