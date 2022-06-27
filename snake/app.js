// state
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const button = document.getElementById('start');
button.addEventListener('click', drawSnake, buildInitialState)


let initialState;

const boardSize = 20
const columns = canvas.Height / boardSize
const rows = canvas.Width / boardSize
canvasSize = 20 * 20
let time = 10
let score = 0

let snake = {
    headxy: [] ,
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
    nextDirection: [1, 0]
  }
  let gameState = {
    apple: [11, 8],
    snake: snake // from above
  }

function buildInitialState() {
    canvas = document.getElementById('Canvas');
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'White'
    ctx.fillRect = (boardSize, boardSize, canvasSize*boardSize-boardSize)
    
    snake();
    apple();
   // setTimeout("gameCycle()", DELAY)
    setInterval(tick, 1000 / 30)
    drawSnake()
}


// render
function renderState() {
    
       clearBoard()
}

function clearBoard(){
   
    ctx.fillStyle= 'black'
    ctx.fillRect(0,0,canvas.clientHeight,canvas.clientWidth)

}
function drawSnake(){
    ctx.fillStyle = 'green'
    for(let i =0; i < snake.body.length; i++){
        ctx.fillStyle = 'green';
		ctx.fillRect(snake.body[i].x, snake.body[i].y, boardSize, boardSize);
    }
}
drawSnake()

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
;
// board.addEventListener('click', onBoardClick); // etc


// add to above
function tick() {
    
    // this is an incremental change that happens to the state every time you update...
  
    renderState()
  }
  
  setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible
  
  // now you might have things like
  document.addEventListener('keydown',function keyDown(e){
  {

    if(e.keyCode==38){
        yvelocity=-1; //move one tile up
        xvelocity=0;

    }
    if(e.keyCode==40){
        yvelocity=1;//move one tile down
        xvelocity=0;
    }

    if(e.keyCode==37){
        yvelocity=0;
        xvelocity=-1;       //move one tile left
    }
    if(e.keyCode==39){
        yvelocity=0;
        xvelocity=1;        //move one tile right
    }
}
    
})