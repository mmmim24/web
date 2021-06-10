const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;


//functions

/* const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter;
}; */




const checkStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMid = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const MidLeft = cellDivs[3].classList[2];
    const center = cellDivs[4].classList[2];
    const MidRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const BotomMid = cellDivs[7].classList[2];
    const BottomRight = cellDivs[8].classList[2];
    // console.log(topLeft,topMid,topRight,MidLeft,center,MidRight,bottomLeft,BotomMid,BottomRight);
    if(topLeft&&topLeft===topMid&&topLeft===topRight){
        gameIsLive = false;
        winner = topLeft;
        statusDiv.innerHTML = `${winner} has won!`;
    }
    else if(topLeft&&topLeft===center&&topLeft===BottomRight){
        gameIsLive = false;
        winner = topLeft;
        statusDiv.innerHTML = `${winner} has won!`;
    }
    else if(MidLeft&&MidLeft===center&&MidLeft===MidRight){
        gameIsLive = false;
        winner = MidLeft;
        statusDiv.innerHTML = `${winner} has won!`;   
    }
    else if(center&&topMid===center&&center===BotomMid){
        gameIsLive = false;
        winner = center;
        statusDiv.innerHTML = `${winner} has won!`;   
    }
    else if(topRight&&topRight===MidRight&&topRight===BottomRight){
        gameIsLive = false;
        winner = topRight;
        statusDiv.innerHTML = `${winner} has won!`;   
    }
    else if(bottomLeft&&bottomLeft===BotomMid&&bottomLeft===BottomRight){
        gameIsLive = false;
        winner = bottomLeft;
        statusDiv.innerHTML = `${winner} has won!`;   
    }
    else if(bottomLeft&&bottomLeft===topLeft&&bottomLeft===MidLeft){
        gameIsLive = false;
        winner = bottomLeft;
        statusDiv.innerHTML = `${winner} has won!`;   
    }
    else if(bottomLeft&&bottomLeft===center&&bottomLeft===topRight){
        gameIsLive = false;
        winner = bottomLeft;
        statusDiv.innerHTML = `${winner} has won!`;   
    }
    else if(topLeft&&topMid&&topRight&&MidLeft&&center&&MidRight&&bottomLeft&&BotomMid&&BottomRight){
        gameIsLive = false;
        statusDiv.innerHTML = 'DRAW';
    }
    else{
        xIsNext = !xIsNext;
        if(xIsNext){
            statusDiv.innerHTML = 'x is next';
        }
        else{
            statusDiv.innerHTML = 'o is Next';
        }
    }
};


//event handlers

const handleReset = (e) => {
    xIsNext = true;
    gameIsLive = true;
    winner = null;
    statusDiv.innerHTML = 'x is next';
    for(const cellDiv of cellDivs){
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
    }
};

const handleCellClick = (e) => {
    const location = e.target.classList[1];
    // console.log("location",location);
    if(xIsNext&&gameIsLive)  {
        if(e.target.classList[2]==='o') return;
        e.target.classList.add('x');
        checkStatus();
    }
    else if(gameIsLive){
        if(e.target.classList[2]==='x') return;
        e.target.classList.add('o');
        checkStatus();
    }
};

//event listener

resetDiv.addEventListener('click',handleReset);

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click',handleCellClick);
}