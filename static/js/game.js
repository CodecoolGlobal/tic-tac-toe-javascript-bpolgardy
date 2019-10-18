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


const gameCanContinue = () => {
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


const threeInARow = (player='x') => {
    const xCoordinates = getXCoordinatesFor(player);
    const yCoordinates = getYCoordinatesFor(player);
    
    for (let i = 0; i < 3; i++) {
        xCoordinateCount = countItems(xCoordinates, i);
        if (xCoordinateCount >= 3) {
            return true;
        };
    };

    for (let i = 0; i < 3; i++) {
        yCoordinateCount = countItems(yCoordinates, i);
        if (yCoordinateCount >= 3) {
            return true;
        };
    };
    return false;
};


const countItems = (array, item) => {
    let counter = 0;
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
    return coordinatePairs;
};


const getXCoordinatesFor = (player='x') => {
    const xCoordinates = [];
    const cells = getCells();
    
    for (cell of cells) {
        if (cell.innerText === player) {
            const cellXCoordinate = cell.dataset.coordinateX;
            xCoordinates.push(Number(cellXCoordinate));
        };
    };
    return xCoordinates;
};


const getYCoordinatesFor = (player='x') => {
    const yCoordinates = [];
    const cells = getCells();
    
    for (cell of cells) {
        if (cell.innerText === player) {
            const cellYCoordinate = cell.dataset.coordinateY;
            yCoordinates.push(Number(cellYCoordinate));
        };
    };
    return yCoordinates;
};


const checkDiagonalOne = () => {
    const cells = getCells();
    const cell00Content = cells[0].innerText;
    const cell11Content = cells[4].innerText;
    const cell22Content = cells[8].innerText;
    if (cell00Content && cell11Content && cell22Content) {
        return (cell00Content === cell11Content && cell11Content === cell22Content);
    };
    return false;
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
