function handleClick(event) {
    handlePlayerTurn();
} 


function addEventListenerToCells() {
    const cells = document.querySelectorAll('.game-cell');
    
    for (cell of cells) {
        cell.addEventListener('click', handleClick);
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


function game() {
    addEventListenerToCells();
     
    let playerWon = false;
    
    /*while (!playerWon) {
        continue;
    };*/
    
}

addEventListenerToCells();

let playerOneTurn = true; 

/*const cellYCoordinate = event.target.dataset.coordinateY;
const cellXCoordinate = event.target.dataset.coordinateX;
event.target.innerText = "x";
switchPlayer();*/