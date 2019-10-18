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
    
    if (playerXTurn) {
        const playerMark = 'x';
        if (!fieldIsTaken()) {
            event.target.innerText = playerMark;
            playerXTurn = false;
        };
    } else {
        const playerMark ='o';
        if (!fieldIsTaken()) {
            event.target.innerText = playerMark;
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


const threeInARow = (player) => {
    if (moreThanTwo()) {

    };
    return false;
};


const countItems = (array, item) => {
    const counter = 0;
    for (element of array) {
        if (element === item) {
            counter++;
        };
    };
    return counter;
};


const getCoordinatePairsFor = (player) => {
    const coordinatePairs = [];
    const cells = getCells();
    
    for (cell of cells) {
        if (cell.innerText === player) {
            const cellYCoordinate = cell.dataset.coordinateY;
            const cellXCoordinate = cell.dataset.coordinateX;
            const coordinates = [Number(cellXCoordinate), Number(cellYCoordinate)];
            coordinatePairs.push(coordinates);
        };
    };
    console.log(coordinatePairs);
};


const gameCells = getCells();

addEventListenerTo(gameCells);

let playerXTurn = true; 

/*function game() {
    addEventListenerToCells();
        
    let playerWon = false;
    
    while (!playerWon) {
        continue;
    };
    
};*/

/*
const cellYCoordinate = event.target.dataset.coordinateY;
const cellXCoordinate = event.target.dataset.coordinateX;
*/
