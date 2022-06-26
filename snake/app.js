// state
const button = document.getElementById('start');
button.addEventListener('click', buildBoard, buildInitialState)
let initialState;
const board = document.getElementById(gameboard)
//let gameboard = document.getElementById('gameboard')[]
let snake = {
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
    nextDirection: [1, 0]
  }
  let gameState = {
    apple: [11, 8],
    snake: snake // from above
  }
let table = document.getElementsByTagName('table')[0]
function makeRow(){
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++){
        let rowarray=[]
        let rowarry2 = []
        const td = document.createElement('td')
        row.appendChild(td)
        rowarry2 += rowarray.push(document.getElementsByTagName('td')[i])
        console.log(rowarry2,'inside')
    }
    let tablearry=[]
    table.appendChild(row)
    tablearry.push(row.cells)
    console.log(tablearry,'outside')
    tablearry.indexOf('td')
    }

function buildBoard(){
   for (let i = 0; i<20; i++){
    makeRow()
   }
}


function buildInitialState() {
    let tablearr=[]
    let tableSel = tablearr.push(document.querySelectorAll('tr'))
    console.log(tableSel)
}


// render
function renderState() {

}

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
  //document.addEventListener('keydown', function (keydown) {
    // here you might read which key was pressed and update the state accordingly
 // })

  