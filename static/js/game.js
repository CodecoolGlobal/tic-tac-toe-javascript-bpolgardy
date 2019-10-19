const getCells = () => {
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


const addEventListenerTo = (elements) => {
    for (element of elements) {
        element.addEventListener('click', handleClick);
    };
};


const startingPlayer = () => {
    sessionStorage.setItem('player', 'x');
};


const getPlayer = () => {
    const player = sessionStorage.getItem('player');

    return player;
};


const switchPlayer = () => {
    const player = getPlayer();
    if (player === 'x') {
        sessionStorage.setItem('player', 'o');
    } else if (player === 'o') {
        sessionStorage.setItem('player', 'x');
    };
};


const handleClick = (event) => {
    
    handlePlayerTurn();
    console.log(ticTacToe());

    /*if (gameCanContinue()) {
        console.log('game can continue');
    } else {
        console.log('game cannot continue');
    };*/
};


const handlePlayerTurn = () => {
    
    const player = getPlayer();

    if (player === 'x') {
        if (!fieldIsTaken()) {
            event.target.innerText = player;
            switchPlayer();
        };
    } else if (player === 'o') {
        if (!fieldIsTaken()) {
            event.target.innerText = player;
            switchPlayer();
        };
    };
};


const fieldIsTaken = () => {
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


const checkDiagonalOne = (cellContent) => {
    
    if (cellContent[0] && cellContent[4] && cellContent[8]) {
        return (cellContent[0] === cellContent[4] && cellContent[4] === cellContent[8]);
    };
    return false;
};


const checkDiagonalTwo = (cellContent) => {

    if (cellContent[2] && cellContent[4] && cellContent[6]) {
        return (cellContent[2] === cellContent[4] && cellContent[4] === cellContent[6]);
    };
    return false;
};


const checkRows = (cellContent) => {

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


const checkColumns = (cellContent) => {
    
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


const ticTacToe = () => {
    const cellContent = getcellContent();

    if (checkDiagonalOne(cellContent) || 
        checkDiagonalTwo(cellContent) || 
        checkRows(cellContent) || 
        checkColumns(cellContent)) {
        return true;
    }
    return false;

};




const startGame = () => {
    const gameCells = getCells();
    
    addEventListenerTo(gameCells);

    startingPlayer();
};


startGame();