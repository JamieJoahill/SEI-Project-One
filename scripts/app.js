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
const gridHeight = 20
// const cellCount = gridWidth * gridHeight
const rows = []
const cells = []
// onst tetrominoes = ['Tee', 'Left Kink', 'Right Kink', 'Square', 'Left Elbow', 'Right Elbow', 'Bar']


const blockClass = 'block'
const blockStartingPosition = 0
let blockCurrentPosition = 0 // This value will update as it moves



function createGrid() {
  for(let i = 0; i < gridHeight; i++) {
    const row = document.createElement('div')
    row.classList.add(`row`)
    // row.classList.add(`row-${i}`)
    row.dataset.row = `${i}`
    // row.style.width = '100%'
    // row.style.height = '10%'
    grid.appendChild(row)
    rows.push(row)

    for(let i = 0; i < gridWidth; i++) {
      //console.log(row)
      const cell = document.createElement('div')
      cell.classList.add('cell')
      // cell.classList.add(`cell-${i}`)
      cell.dataset.column = `${i}`
      // cell.style.width = '100%'
      // cell.style.height = '100%'
      row.appendChild(cell)
      cells.push(cell)
    }
  }
}

createGrid()

// const tetrominoes = {
//   Tee: {
//     dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 0}, {rows: 1, cell: 1}, {rows: 1, cell: 2}]
//   },
//   LeftKink: {
//     dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 1}, { rows: 2, cell: 1}, {rows: 2, cell: 0}]
//   },
//   RightKink: {
//     dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 1}, { rows: 2, cell: 1}, {rows: 2, cell: 2}]
//   },
//   Square: {
//     dimensions: [{rows: 0, cell: 0}, {rows: 0, cell: 1}, { rows: 1, cell: 0}, {rows: 1, cell: 1}]
//   },
//   LeftElbow: {
//     dimensions: [{rows: 0, cell: 0}, {rows: 1, cell: 0}, { rows: 2, cell: 0}, {rows: 3, cell: 1}]
//   },
//   RightElbow: {
//     dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 1}, { rows: 2, cell: 1}, {rows: 2, cell: 2}]
//   },
//   Bar: {
//     dimensions: [{rows: 0, cell: 1}, {rows: 1, cell: 0}, { rows: 1, cell: 1}, {rows: 1, cell: 2}]
//   }
// }

// for(let shape in tetrominoes) {
//   console.log(shape)
//   for(let dimensions in shape) {
//     console.log(dimensions)
//   }
// }

// Template - [{row: , cell: }, {row: , cell: }, {row: , cell: }, {row: , cell: }]

const i = [{row: 0, cell: 0}, {row: 1, cell: 0}, {row: 2, cell: 0}, {row: 3, cell: 0}]
const l = [{row: 0, cell: 0}, {row: 1, cell: 0}, { row: 2, cell: 0}, {row: 3, cell: 1}]
const j = [{row: 0, cell: 0}, {row: 1, cell: 0}, {row: 2, cell: 0}, {row: 2, cell: 1}]
const t = [{row: 0, cell: 1}, {row: 1, cell: 0}, {row: 1, cell: 1}, {row: 1, cell: 2}]
const s = [{row: 0, cell: 1}, {row: 1, cell: 1}, { row: 2, cell: 1}, {row: 2, cell: 0}]
const z = [{row: 0, cell: 1}, {row: 1, cell: 1}, { row: 2, cell: 1}, {row: 2, cell: 2}]
const o = [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 0}, {row: 1, cell: 1}]
// console.log(i.forEach(block => console.log(block)))

function createI() {
  // Refactor Create a function to take the bar array and loop through each item
  console.log(rows[0].childNodes[0].classList.add('block', 'i'))
  console.log(rows[1].childNodes[0].classList.add('block', 'i'))
  console.log(rows[2].childNodes[0].classList.add('block', 'i'))
  console.log(rows[3].childNodes[0].classList.add('block', 'i'))
}
// createI()

function createL() {
  // console.log(rows[0].childNodes[0].classList.add('block', 'l'))
  // console.log(rows[1].childNodes[0].classList.add('block', 'l'))
  // console.log(rows[2].childNodes[0].classList.add('block', 'l'))
  // console.log(rows[2].childNodes[1].classList.add('block', 'l'))
  console.log(rows[0].childNodes[2].classList.add('block', 'l'))
  console.log(rows[1].childNodes[2].classList.add('block', 'l'))
  console.log(rows[2].childNodes[2].classList.add('block', 'l'))
  console.log(rows[2].childNodes[3].classList.add('block', 'l'))
}

// createL()

function createJ() {
  // Refactor Create a function to take the bar array and loop through each item
  // rows[0].childNodes[1].classList.add('block', 'j')
  // rows[1].childNodes[1].classList.add('block', 'j')
  // rows[2].childNodes[1].classList.add('block', 'j')
  // rows[2].childNodes[0].classList.add('block', 'j')

  rows[0].childNodes[6].classList.add('block', 'j')
  rows[1].childNodes[6].classList.add('block', 'j')
  rows[2].childNodes[6].classList.add('block', 'j')
  rows[2].childNodes[5].classList.add('block', 'j')
}

// createJ()

function createT() {
  // rows[0].childNodes[1].classList.add('block', 't')
  // rows[1].childNodes[0].classList.add('block', 't')
  // rows[1].childNodes[1].classList.add('block', 't')
  // rows[1].childNodes[2].classList.add('block', 't')

  rows[5].childNodes[1].classList.add('block', 't')
  rows[6].childNodes[0].classList.add('block', 't')
  rows[6].childNodes[1].classList.add('block', 't')
  rows[6].childNodes[2].classList.add('block', 't')
}

// createT()

function createS() {
  // Refactor Create a function to take the bar array and loop through each item
  // rows[0].childNodes[1].classList.add('block', 's')
  // rows[1].childNodes[1].classList.add('block', 's')
  // rows[2].childNodes[1].classList.add('block', 's')
  // rows[2].childNodes[2].classList.add('block', 's')

  rows[5].childNodes[6].classList.add('block', 's')
  rows[5].childNodes[5].classList.add('block', 's')
  rows[6].childNodes[4].classList.add('block', 's')
  rows[6].childNodes[5].classList.add('block', 's')
}
// createS()

function createZ() {
  // Refactor Create a function to take the bar array and loop through each item
  rows[8].childNodes[5].classList.add('block', 'z')
  rows[8].childNodes[6].classList.add('block', 'z')
  rows[9].childNodes[7].classList.add('block', 'z')
  rows[9].childNodes[6].classList.add('block', 'z')
}
// createZ()

// const o = [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 0}, {row: 1, cell: 1}]
function createO() {
  // Refactor Create a function to take the bar array and loop through each item
  // rows[8].childNodes[1].classList.add('block', 'o')
  // rows[8].childNodes[2].classList.add('block', 'o')
  // rows[9].childNodes[1].classList.add('block', 'o')
  // rows[9].childNodes[2].classList.add('block', 'o')

  rows[0].childNodes[0].classList.add('block', 'o')
  rows[0].childNodes[1].classList.add('block', 'o')
  rows[1].childNodes[0].classList.add('block', 'o')
  rows[1].childNodes[1].classList.add('block', 'o')
}
createO()

// Testing block movement and barriers
function addTetrominoes(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4) {
  // cells[blockPosition].classList.add(blockClass)

  // rows[0].childNodes[0].classList.add('block', 'o')
  // rows[0].childNodes[1].classList.add('block', 'o')
  // rows[1].childNodes[0].classList.add('block', 'o')
  // rows[1].childNodes[1].classList.add('block', 'o')

  // rows[tetrominoesPositionRow].childNodes[tetrominoesPositionCell].classList.add('block', 'o')
  // rows[tetrominoesPositionRow].childNodes[tetrominoesPositionCell + 1].classList.add('block', 'o')
  // rows[tetrominoesPositionRow + 1].childNodes[tetrominoesPositionCell].classList.add('block', 'o')
  // rows[tetrominoesPositionRow + 1].childNodes[tetrominoesPositionCell + 1].classList.add('block', 'o')

  rows[tPR1].childNodes[tPC1].classList.add('block', 'o')
  rows[tPR2].childNodes[tPC2].classList.add('block', 'o')
  rows[tPR3].childNodes[tPC3].classList.add('block', 'o')
  rows[tPR4].childNodes[tPC4].classList.add('block', 'o')
}

function removeTetrominoes(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4) {
  // cells[blockPosition].classList.remove(blockClass)

  // rows[0].childNodes[0].classList.remove('block', 'o')
  // rows[0].childNodes[1].classList.remove('block', 'o')
  // rows[1].childNodes[0].classList.remove('block', 'o')
  // rows[1].childNodes[1].classList.remove('block', 'o')

  // rows[tetrominoesPositionRow].childNodes[tetrominoesPositionCell].classList.remove('block', 'o')
  // rows[tetrominoesPositionRow].childNodes[tetrominoesPositionCell + 1].classList.remove('block', 'o')
  // rows[tetrominoesPositionRow + 1].childNodes[tetrominoesPositionCell].classList.remove('block', 'o')
  // rows[tetrominoesPositionRow + 1].childNodes[tetrominoesPositionCell + 1].classList.remove('block', 'o')

  rows[tPR1].childNodes[tPC1].classList.remove('block', 'o')
  rows[tPR2].childNodes[tPC2].classList.remove('block', 'o')
  rows[tPR3].childNodes[tPC3].classList.remove('block', 'o')
  rows[tPR4].childNodes[tPC4].classList.remove('block', 'o')
}

let tPR1 = 0
let tPR2 = 0
let tPR3 = 1
let tPR4 = 1

let tPC1 = 0
let tPC2 = 1
let tPC3 = 0
let tPC4 = 1

function handleKeyPress(event) {
  // console.log(event.keyCode) - Log the key pressed

  const key = event.keyCode

  // removeBlock(blockCurrentPosition)
  // removeTetrominoes(tetrominoesPosition)
  removeTetrominoes(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4)

  //if(key === 39 && blockCurrentPosition % gridWidth !== gridWidth - 1) { // Move Right

  if(key === 39) { // Move Right
    // blockCurrentPosition++
    // tetrominoesPositionRow++
    tPC1++
    tPC2++
    tPC3++
    tPC4++
  // } else if(key === 37 && blockCurrentPosition % gridWidth !== 0) { // Move Left

  } else if(key === 37) { // Move Left
    // blockCurrentPosition--
    // tetrominoesPositionRow--
    tPC1--
    tPC2--
    tPC3--
    tPC4--
  // } else if(key === 38 && blockCurrentPosition >= gridWidth) { // Move Up
  } else if(key === 38) { // Move Up
    // blockCurrentPosition -= 10
    // tetrominoesPositionCell -= 10
    tPR1--
    tPR2--
    tPR3--
    tPR4--
  // } else if(key === 40 && blockCurrentPosition + gridWidth <= gridWidth * gridHeight - 1) { // Move Down
  } else if(key === 40) { // Move Down
    // blockCurrentPosition += 10
    // tetrominoesPositionCell += 10
    tPR1++
    tPR2++
    tPR3++
    tPR4++
  }

  // addBlock(blockCurrentPosition)
  // addTetrominoes(tetrominoesPosition)
  addTetrominoes(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4)

}

document.addEventListener('keydown', handleKeyPress)

// [{rows: 0, cell: 1}, {rows: 1, cell: 0}, {rows: 1, cell: 1}, {rows: 1, cell: 2}]

// console.log(rows.forEach(row => console.log(row.dataset.row)))
// console.log(cells.forEach(cell => console.log(cell.dataset.column)))

// rows.filter(row => {
//   cells.filter(cell => {
//     console.log(row.dataset)
//     console.log(cell.dataset)
//     if(row.dataset === 0 && cell.dataset === 1) {
//       console.log(cell[0])
//     }
//   })
// })

// rows.filter(row => {
//   // console.log(`Row Data Attribute ->`, row.getAttribute('data-row'))
//   const rowDataAttr = Number(row.getAttribute('data-row'))
//   //console.log(row)

// })

// if .every() row contains a block then remove that row and add to score

// console.log(tee.forEach(item => {
//   console.log(`item -->`, item)
//   // console.log(`item row -->`, item.row)
//   // console.log(`item column -->`, item.column)
// }))



// console.log(tetrominoes.Tee.dimensions)

// rows.map(row => {
//     console.log(row[0].children)
// })


// function generateTetrominoes() {
//   // this function will generate a random Tetrominoe based on it's Dimmensions

//   // console.log(rows)
//   // console.log(cells)

//   // console.log(rows[0])
//   // console.log(cells[1])
//   // console.log(rows[0])
// }

// console.log(createTetrominoes())
// console.log(rows)
// console.log(cells)









// // Testing block movement and barriers
// function addBlock(blockPosition) {
//   cells[blockPosition].classList.add(blockClass)
// }

// function removeBlock(blockPosition) {
//   cells[blockPosition].classList.remove(blockClass)
// }

// function handleKeyPress(event) {
//   // console.log(event.keyCode) - Log the key pressed

//   const key = event.keyCode

//   removeBlock(blockCurrentPosition)

//   if(key === 39 && blockCurrentPosition % gridWidth !== gridWidth - 1) { // Move Right
//     blockCurrentPosition++
//   } else if(key === 37 && blockCurrentPosition % gridWidth !== 0) { // Move Left
//     blockCurrentPosition--
//   } else if(key === 38 && blockCurrentPosition >= gridWidth) { // Move Up
//     blockCurrentPosition -= 10
//   } else if(key === 40 && blockCurrentPosition + gridWidth <= gridWidth * gridHeight - 1) { // Move Down
//     blockCurrentPosition += 10
//   }

//   addBlock(blockCurrentPosition)
// }

// document.addEventListener('keydown', handleKeyPress)