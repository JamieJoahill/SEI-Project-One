// * Tetris
// 	Game Overview 
// 	Random blocks fall out the sky, you can turn them on an axis and place them in a 	row along the bottom. if you create a row or multiple complete rows it is cleared 
// 	away and added to your score. If you block up the path the game is over
// 	Each Tetris block is a combination of 4 blocks

// Challenges
// rotating the shape if near a wall
// Game ends if shape is over the top of grid
// changing the size of the grid
// functions to create shapes - using classes
// displaying next shape up/Look ahead piece

	// DATA
	// 	gridWidth 10
  //  gridHeight 20
	// 	cellCount
	// 	cells = [ ]
	// 	blockCurrentPosition
	// 	nextBlock
	// 	score = Number
	// 	highScore = Number
  //  lines = Number

  // HTML
	// 	Create a Main element to wrap and center game
	// 	Create a Score element to hold current score
	// 	Create a High Score element to hold high score

  // CSS 
  //   bare bones css/get JS Working First
  //   basic tetris block shapes

  // JAVASCRIPT
  // functions to create each shape
  // functions to time the shape drop based on level
  // functions to rotate the shape
  // function to switch between current shape and hold
	// use classes in JS to create the shapes
		

  // Control Keys 
  // Move Right - Right Arrow
  // Move Left - Left Arrow
  // Rotate Right - Up Arrow
  // Rotate Left - Z
  // Soft Drop - Down Arrow
  // Hard Drop - Space
  // Esc - pause


// research as much a possible
// The plan really matters
// Full prove your understading of the game
// Start small and simple
// make a very tiny small thing happen first
// start very small super basic
// those two last days focus on styling 

// Tetris Pieces 
// Tee
// Left Kink
// Right Kink
// Square
// Left Elbow
// Right Elbow
// Bar

// Element Selectors
const grid = document.querySelector('.grid')

const gridWidth = 10
const gridHeight = 22
const cellCount = gridWidth * gridHeight
const cells = []
const tetrominoes = ['Tee', 'Left Kink', 'Right Kink', 'Square', 'Left Elbow', 'Right Elbow', 'Bar']

const blockClass = 'block'
const blockStartingPosition = 0
let blockCurrentPosition = 0 // This value will update as it moves

function createGrid() {
  for(let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    //cell.innerText = i // assign each cell a number value

    grid.appendChild(cell)
    cells.push(cell) // pushes all cells into the array 

    // console.log(cell)
  }
  addBlock(blockStartingPosition)
  // console.log(cells)
}

createGrid()


// Testing block movement and barriers
function addBlock(blockPosition) {
  cells[blockPosition].classList.add(blockClass)
}

function removeBlock(blockPosition) {
  cells[blockPosition].classList.remove(blockClass)
}


function handleKeyPress(event) {
  // console.log(event.keyCode) - Log the key pressed

  const key = event.keyCode

  removeBlock(blockCurrentPosition)

  if(key === 39 && blockCurrentPosition % gridWidth !== gridWidth - 1) { // Move Right
    blockCurrentPosition++
  } else if(key === 37 && blockCurrentPosition % gridWidth !== 0) { // Move Left
    blockCurrentPosition--
  } else if(key === 38 && blockCurrentPosition >= gridWidth) { // Move Up
    blockCurrentPosition -= 10
  } else if(key === 40 && blockCurrentPosition + gridWidth <= gridWidth * gridHeight - 1) { // Move Down
    blockCurrentPosition += 10
  }

  addBlock(blockCurrentPosition)
}

document.addEventListener('keydown', handleKeyPress)