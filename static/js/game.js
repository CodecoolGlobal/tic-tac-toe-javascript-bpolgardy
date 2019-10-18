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


const emptyCellsLeft = function () {
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
    const cells = getCells();
    const cell20Content = cells[2].innerText;
    const cell11Content = cells[4].innerText;
    const cell02Content = cells[6].innerText;

    const cellContent = getcellContent();

    if (cellContent[2] && cellContent[4] && cellContent[6]) {
        return (cellContent[2] === cellContent[4] && cellContent[4] === cellContent[6]);
    };
    return false;
};


const checkRows = () => {
    const cells = getCells();

    const cell00Content = cells[0].innerText;
    const cell10Content = cells[1].innerText;
    const cell20Content = cells[2].innerText;
    const cell01Content = cells[3].innerText;
    const cell11Content = cells[4].innerText;
    const cell21Content = cells[5].innerText;
    const cell02Content = cells[6].innerText;
    const cell12Content = cells[7].innerText;
    const cell22Content = cells[8].innerText;

    if (cell00Content && cell10Content && cell20Content) {
        if (cell00Content === cell10Content && cell10Content === cell20Content) {
            return true;
        };
    };
    
    if (cell01Content && cell11Content && cell21Content){
        if (cell01Content === cell11Content && cell11Content === cell21Content) {
            return true;
        };
    };

    if (cell02Content && cell12Content && cell22Content){
        if (cell02Content === cell12Content && cell12Content === cell22Content) {
            return true;
        };
    };
    return false;
};


const checkColumns = () => {
    const cells = getCells();

    const cell00Content = cells[0].innerText;
    const cell10Content = cells[1].innerText;
    const cell20Content = cells[2].innerText;
    const cell01Content = cells[3].innerText;
    const cell11Content = cells[4].innerText;
    const cell21Content = cells[5].innerText;
    const cell02Content = cells[6].innerText;
    const cell12Content = cells[7].innerText;
    const cell22Content = cells[8].innerText;

    if (cell00Content && cell01Content && cell02Content) {
        if (cell00Content === cell01Content && cell01Content === cell02Content) {
            return true;
        };
    };
    
    if (cell10Content && cell11Content && cell12Content){
        if (cell10Content === cell11Content && cell11Content === cell12Content) {
            return true;
        };
    };

    if (cell20Content && cell21Content && cell22Content){
        if (cell20Content === cell21Content && cell21Content === cell22Content) {
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
