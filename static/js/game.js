function getCells () {
    const cells = document.querySelectorAll('.game-cell');
    return cells;
};

const getcellContent = () => {
    const cells = getCells();
    const cellContent = [];

    for (cell of cells) {
        cellContent.push(cell.innerText);
    };

    return cellContent;
};


function addEventListenerTo(elements) {
    for (element of elements) {
        element.addEventListener('click', handleClick);
    };
};


function handleClick(event) {
    
    handlePlayerTurn();
    console.log(PlayerWon());

    /*if (gameCanContinue()) {
        console.log('game can continue');
    } else {
        console.log('game cannot continue');
    };*/
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


const emptyCellsLeft = () => {
    const cells = getCells();
    for (cell of cells) {
        if (!cell.innerText) {
            return true;
        }
    }
    return false;
}


const checkDiagonalOne = () => {

    const cellContent = getcellContent();
    
    if (cellContent[0] && cellContent[4] && cellContent[8]) {
        return (cellContent[0] === cellContent[4] && cellContent[4] === cellContent[8]);
    };
    return false;
};


const checkDiagonalTwo = () => {
    
    const cellContent = getcellContent();

    if (cellContent[2] && cellContent[4] && cellContent[6]) {
        return (cellContent[2] === cellContent[4] && cellContent[4] === cellContent[6]);
    };
    return false;
};


const checkRows = () => {

    const cellContent = getcellContent();

    if (cellContent[0] && cellContent[1] && cellContent[2]) {
        if (cellContent[0] === cellContent[1] && cellContent[1] === cellContent[2]) {
            return true;
        };
    };
    
    if (cellContent[3] && cellContent[4] && cellContent[5]){
        if (cellContent[3] === cellContent[4] && cellContent[4] === cellContent[5]) {
            return true;
        };
    };

    if (cellContent[6] && cellContent[7] && cellContent[8]){
        if (cellContent[6] === cellContent[7] && cellContent[7] === cellContent[8]) {
            return true;
        };
    };
    return false;
};


const checkColumns = () => {
    
    const cellContent = getcellContent();

    if (cellContent[0] && cellContent[3] && cellContent[6]) {
        if (cellContent[0] === cellContent[3] && cellContent[3] === cellContent[6]) {
            return true;
        };
    };
    
    if (cellContent[1] && cellContent[4] && cellContent[7]){
        if (cellContent[1] === cellContent[4] && cellContent[4] === cellContent[7]) {
            return true;
        };
    };

    if (cellContent[2] && cellContent[5] && cellContent[8]){
        if (cellContent[2] === cellContent[5] && cellContent[5] === cellContent[8]) {
            return true;
        };
    };
    return false;
};


const PlayerWon = () => {
    if (checkDiagonalOne() || checkDiagonalTwo() || checkRows() || checkColumns()) {
        return true;
    }
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
