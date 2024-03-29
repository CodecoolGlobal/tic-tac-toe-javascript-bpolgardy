const isIterable = (obj) => {
    if (obj == null) {
        return false;
    };
    return typeof obj[Symbol.iterator] === 'function';
};


const getCells = () => {
    const cells = document.querySelectorAll('.game-cell');
    return cells;
};


const getSingleElement = (id) => {
    const element = document.querySelector(id);
    return element;
};


const getcellContent = () => {
    const cells = getCells();
    const cellContent = [];
    
    for (cell of cells) {
        cellContent.push(cell.innerText);
    };
    
    return cellContent;
};


const addEventListenerTo = (object, event, callback) => {
    if (isIterable(object)) {
        for (element of object) {
            element.addEventListener(event, callback);
        };
    } else {
        object.addEventListener(event, callback);
    };
};


const removeEventListenerFrom = (object, event, callback) => {
    for (element of object) {
        element.removeEventListener(event, callback);
    };
};


const setStartingPlayer = () => {
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


const handleButtonClick = () => {
    window.location.reload();
};


const handleCellClick = () => {
    handlePlayerTurn();
};


const handlePlayerTurn = () => {
    
    const player = getPlayer();

    if (player === 'x') {
        if (!fieldIsTaken()) {
            event.target.innerText = player;
            checkWinner(player);
            switchPlayer();
        };
    } else if (player === 'o') {
        if (!fieldIsTaken()) {
            event.target.innerText = player;
            checkWinner(player);
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


const checkWinner = (player) => {
    if (ticTacToe()) {
        setTimeout(function () {
            alert(`Player ${player} wins!`);
            const gameCells = getCells();
            removeEventListenerFrom(gameCells, 'click', handleCellClick);
            },0);
    } else if (!gameCanContinue()) {
        setTimeout(function () {
            alert(`Draw!`);
            const gameCells = getCells();
            removeEventListenerFrom(gameCells, 'click', handleCellClick);
            },0);
    };
};


const startGame = () => {
    const gameCells = getCells();
    const tryAgainButton = getSingleElement('#retry-button');
    
    addEventListenerTo(gameCells, 'click', handleCellClick);
    addEventListenerTo(tryAgainButton, 'click', handleButtonClick);

    setStartingPlayer();
};


startGame();