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


// for(let shape in tetrominoes) {
//   console.log(shape)
//   for(let dimensions in shape) {
//     console.log(dimensions)
//   }
// }

// Template - [{row: , cell: }, {row: , cell: }, {row: , cell: }, {row: , cell: }]

// const i = [
//   [{row: 0, cell: 0}, {row: 1, cell: 0}, {row: 2, cell: 0}, {row: 3, cell: 0}],
//   [{row: 1, cell: 1}, {row: 1, cell: 2}, {row: 1, cell: 3}, {row: 1, cell: 4}]
// ]

const i = {
  default: [{row: 0, cell: 0}, {row: 1, cell: 0}, {row: 2, cell: 0}, {row: 3, cell: 0}],
  rotations: [{row: 1, cell: 1}, {row: 1, cell: 2}, {row: 1, cell: 3}, {row: 1, cell: 4}],
  class: ['i']
}

// console.log(i.default[0])
// i.default.forEach(item => console.log(item)) // - Logs Co-Ordinates for default position

const l = {
  default: [{row: 0, cell: 0}, {row: 1, cell: 0}, { row: 2, cell: 0}, {row: 2, cell: 1}],
  class: ['l']
  // rotations: [
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }]
  // ]
}

// const l = [{row: 0, cell: 0}, {row: 1, cell: 0}, { row: 2, cell: 0}, {row: 3, cell: 1}]
// l.default.forEach(item => console.log(item)) - Logs Co-Ordinates for default position

const j = {
  default: [{row: 0, cell: 1}, {row: 1, cell: 1}, {row: 2, cell: 1}, {row: 2, cell: 0}],
  class: ['j']
  // rotations: [
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }]
  // ]
}
// const j = [{row: 0, cell: 0}, {row: 1, cell: 0}, {row: 2, cell: 0}, {row: 2, cell: 1}]
// j.default.forEach(item => console.log(item)) - Logs Co-Ordinates for default position

const t = {
  default: [{row: 0, cell: 1}, {row: 1, cell: 0}, {row: 1, cell: 1}, {row: 1, cell: 2}],
  class: ['t']
  // rotations: [
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }]
  // ]
}

// const t = [{row: 0, cell: 1}, {row: 1, cell: 0}, {row: 1, cell: 1}, {row: 1, cell: 2}]
// t.default.forEach(item => console.log(item)) - Logs Co-Ordinates for default position

const s = {
  default: [{row: 0, cell: 1}, {row: 0, cell: 2}, { row: 1, cell: 0}, {row: 1, cell: 1}],
  class: ['s']
  // rotations: [
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }]
  // ]
}

// const s = [{row: 0, cell: 1}, {row: 1, cell: 1}, { row: 2, cell: 1}, {row: 2, cell: 0}]
// s.default.forEach(item => console.log(item)) - Logs Co-Ordinates for default position

const z = {
  default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 1}, {row: 1, cell: 2}],
  class: ['z']
  // rotations: [
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }]
  // ]
}

// const z = [{row: 0, cell: 1}, {row: 1, cell: 1}, { row: 2, cell: 1}, {row: 2, cell: 2}]
// z.default.forEach(item => console.log(item)) - Logs Co-Ordinates for default position

const o = {
  default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 0}, {row: 1, cell: 1}],
  class: ['o']
  // rotations: [
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }],
  //   [{row: , cell: }, {row: , cell: }, { row: , cell: }, {row: , cell: }]
  // ]
}

// const o = [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 0}, {row: 1, cell: 1}]
// o.default.forEach(item => console.log(item)) - Logs Co-Ordinates for default position


// console.log(i.default)
// console.log(i.default[0].row, i.default[0].cell)
// console.log(i.default[1].row, i.default[1].cell)
// console.log(i.default[2].row, i.default[2].cell)
// console.log(i.default[3].row, i.default[3].cell)

const tetrominoes = {
  i: {
    default: [{row: 0, cell: 0}, {row: 1, cell: 0}, {row: 2, cell: 0}, {row: 3, cell: 0}],
    class: ['i']
  },
  l: {
    default: [{row: 0, cell: 0}, {row: 1, cell: 0}, { row: 2, cell: 0}, {row: 2, cell: 1}],
    class: ['l']
  },
  j: {
    default: [{row: 0, cell: 1}, {row: 1, cell: 1}, {row: 2, cell: 1}, {row: 2, cell: 0}],
    class: ['j']
  },
  t: {
    default: [{row: 0, cell: 1}, {row: 1, cell: 0}, {row: 1, cell: 1}, {row: 1, cell: 2}],
    class: ['t']
  },
  s: {
    default: [{row: 0, cell: 1}, {row: 0, cell: 2}, { row: 1, cell: 0}, {row: 1, cell: 1}],
    class: ['s']
  },
  z: {
    default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 1}, {row: 1, cell: 2}],
    class: ['z']
  },
  o: {
    default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 0}, {row: 1, cell: 1}],
    class: ['o']
  }
}

// console.log(tetrominoes)
// console.log(tetrominoes.i)
// console.log(tetrominoes.i.default[0])

// for(item in tetrominoes) {
//   console.log(item)
// }

const shapeHistory = []

function generateShape() {

  // console.log(tetrominoes.o.default[0])
  // console.log(tetrominoes.o.default[1])
  // console.log(tetrominoes.o.default[2])
  // console.log(tetrominoes.o.default[3])
  // const shapes = Object.keys(tetrominoes)
  const tetrominoes = [i, l, j, t, s, z, o]
  
  const randomShape = Math.floor(Math.random() * tetrominoes.length)

  return addTetro(tetrominoes[randomShape])
  // console.log(typeof shapes[randomShape])
  //return addTetro(randomShape)

}

// generateShape()

function addTetro(shape) {
  shape.default.forEach(item => {
    // console.log(item.row, item.cell)
    rows[item.row].childNodes[item.cell].classList.add('block', `${shape.class[0]}`)
  })
}
// addTetro(i)

// addTetro(j)

// addTetro(l)

// addTetro(o)

// addTetro(t)

// addTetro(s)

// addTetro(z)


function removeTetro(shape) {
  shape.default.forEach(item => {
    // console.log(item.row, item.cell)
    rows[item.row].childNodes[item.cell].classList.remove('block', `${shape.class[0]}`)
  })
}

// removeTetro(i.default)

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

  rows[tPR1].childNodes[tPC1].classList.add('block', 'i')
  rows[tPR2].childNodes[tPC2].classList.add('block', 'i')
  rows[tPR3].childNodes[tPC3].classList.add('block', 'i')
  rows[tPR4].childNodes[tPC4].classList.add('block', 'i')
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

  rows[tPR1].childNodes[tPC1].classList.remove('block', 'i')
  rows[tPR2].childNodes[tPC2].classList.remove('block', 'i')
  rows[tPR3].childNodes[tPC3].classList.remove('block', 'i')
  rows[tPR4].childNodes[tPC4].classList.remove('block', 'i')
}

// {row: 0, cell: 1}, {row: 1, cell: 1}, { row: 2, cell: 1}, {row: 2, cell: 2}

// console.log(`Outside Rotate Function --> TPR1`, tPR1)
// console.log(`Outside Rotate Function --> TPR2`, tPR2)
// console.log(`Outside Rotate Function --> TPR3`, tPR3)
// console.log(`Outside Rotate Function --> TPR4`, tPR4)

// console.log(`Outside Rotate Function --> TPC1`, tPC1)
// console.log(`Outside Rotate Function --> TPC2`, tPC2)
// console.log(`Outside Rotate Function --> TPC3`, tPC3)
// console.log(`Outside Rotate Function --> TPC4`, tPC4)

// function tetrominoesRotateRight(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4) {
//   removeTetrominoes(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4)
  
//   tPR1 += 1
//   tPR2 += 0
//   tPR3 += -1
//   tPR4 += 0

//   tPC1 += 1
//   tPC2 += 1
//   tPC3 += 0
//   tPC4 += -1

//   // console.log(`Inside Rotate Function --> TPR1`, tPR1)
//   // console.log(`Inside Rotate Function --> TPR2`, tPR2)
//   // console.log(`Inside Rotate Function --> TPR3`, tPR3)
//   // console.log(`Inside Rotate Function --> TPR4`, tPR4)

//   // console.log(`Inside Rotate Function --> TPC1`, tPC1)
//   // console.log(`Inside Rotate Function --> TPC2`, tPC2)
//   // console.log(`Inside Rotate Function --> TPC3`, tPC3)
//   // console.log(`Inside Rotate Function --> TPC4`, tPC4)
//   addTetrominoes(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4)
// }

// function handleRotate(event) {
//   const key = event.keyCode
//   // console.log(key)
//   // console.log('Hello')
//   //console.log(`First Rotation -->`, i[0])
//   // console.log(`Second Rotation -->`, i[1])
//   if(key === 82) {
//     tetrominoesRotateRight(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4)
//   }
// }

// document.addEventListener('keydown', handleRotate)

let tPR1 = 1
let tPR2 = 2
let tPR3 = 3
let tPR4 = 4

let tPC1 = 3
let tPC2 = 3
let tPC3 = 3
let tPC4 = 3

console.log(i)
console.log(i.default[0].row)
console.log(i.default[0].cell);

let currentShape = generateShape()

let count = 0

function moveDown() {

  const moveDownTimer = setInterval(() => {

    if(i.default[0].row < gridHeight - 1 && i.default[1].row < gridHeight - 1 && i.default[2].row < gridHeight - 1 && i.default[3].row < gridHeight - 1) {
      removeTetro(i)
      i.default[0].row++
      i.default[1].row++
      i.default[2].row++
      i.default[3].row++
      addTetro(i)
      console.log('Keep Running...')
      count++
    }

    if(count > 16) {
      console.log('Running...')
      console.log(grid[0])
      console.log(`count -->`,count)
      clearInterval(moveDownTimer)
    }
    // if at bottom stop moving down

  },800)

}
// console.log(grid.lastChild.dataset.row)


function enableKeyPress(event) {
  const key = event.keyCode
  // console.log('enable key press')
  removeTetro(i)

  if(key === 39 && i.default[0].cell % gridWidth !== gridWidth - 1 && i.default[1].cell % gridWidth !== gridWidth - 1 && i.default[2].cell % gridWidth !== gridWidth - 1 && i.default[3].cell % gridWidth !== gridWidth - 1) {
    i.default[0].cell++
    i.default[1].cell++
    i.default[2].cell++
    i.default[3].cell++
  } else if(key === 37 && i.default[0].cell % gridWidth !== 0 && i.default[1].cell % gridWidth !== 0 && i.default[2].cell % gridWidth !== 0 && i.default[3].cell % gridWidth !== 0) {
    i.default[0].cell--
    i.default[1].cell--
    i.default[2].cell--
    i.default[3].cell--
  } else if(key === 38 && i.default[0].row <= gridHeight && i.default[1].row <= gridHeight && i.default[2].row <= gridHeight && i.default[3].row <= gridHeight) {
    i.default[0].row--
    i.default[1].row--
    i.default[2].row--
    i.default[3].row--
  } else if(key === 40 && i.default[0].row < gridHeight - 1 && i.default[1].row < gridHeight - 1 && i.default[2].row < gridHeight - 1 && i.default[3].row < gridHeight - 1) {
    i.default[0].row++
    i.default[1].row++
    i.default[2].row++
    i.default[3].row++
  }

  addTetro(i)
  

}

document.addEventListener('keydown', enableKeyPress)


// function handleKeyPress(event) {
//   // console.log(event.keyCode) - Log the key pressed

//   const key = event.keyCode

//   // removeBlock(blockCurrentPosition)
//   // removeTetrominoes(tetrominoesPosition)
//   removeTetrominoes(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4)

//   // removeTetro(i)
  

//   //if(key === 39 && blockCurrentPosition % gridWidth !== gridWidth - 1) { // Move Right
//   // console.log(key)
//   // if(key === 80) { // R Key
//     // console.log(`------REFRESH-----`)
//     // console.log(`Outside Rotate Function --> TPR1`, tPR1)
//     // console.log(`Outside Rotate Function --> TPR2`, tPR2)
//     // console.log(`Outside Rotate Function --> TPR3`, tPR3)
//     // console.log(`Outside Rotate Function --> TPR4`, tPR4)

//     // console.log(`Outside Rotate Function --> TPC1`, tPC1)
//     // console.log(`Outside Rotate Function --> TPC2`, tPC2)
//     // console.log(`Outside Rotate Function --> TPC3`, tPC3)
//     // console.log(`Outside Rotate Function --> TPC4`, tPC4)
//     // console.log(`------REFRESH-----`)
//   // }

//   // console.log(key)
  

//   if(key === 39 && tPC1 % gridWidth !== gridWidth - 1 && tPC2 % gridWidth !== gridWidth - 1 && tPC3 % gridWidth !== gridWidth - 1 && tPC4 % gridWidth !== gridWidth - 1) { // Move Right
//     // blockCurrentPosition++
//     // tetrominoesPositionRow++



//     tPC1++
//     tPC2++
//     tPC3++
//     tPC4++
//     // console.log(`TPC - MOVE RIGHT`)
//     // console.log(`TPC1-->`, tPC1)
//     // console.log(`TPC2-->`, tPC2)
//     // console.log(`TPC3-->`, tPC3)
//     // console.log(`TPC4-->`, tPC4)
//     // console.log(`TPC - MOVE RIGHT`)
//   // } else if(key === 37 && blockCurrentPosition % gridWidth !== 0) { // Move Left

//   } else if(key === 37 && tPC1 % gridWidth !== 0 && tPC2 % gridWidth !== 0 && tPC3 % gridWidth !== 0 && tPC4 % gridWidth !== 0) { // Move Left
//     // blockCurrentPosition--
//     // tetrominoesPositionRow--
//     tPC1--
//     tPC2--
//     tPC3--
//     tPC4--
//     // console.log(`TPC - MOVE LEFT`)
//     // console.log(`TPC1-->`, tPC1)
//     // console.log(`TPC2-->`, tPC2)
//     // console.log(`TPC3-->`, tPC3)
//     // console.log(`TPC4-->`, tPC4)
//     // console.log(`TPC - MOVE LEFT`)
//   // } else if(key === 38 && blockCurrentPosition >= gridWidth) { // Move Up
//   } else if(key === 38 && tPR1 <= gridHeight && tPR2 <= gridHeight && tPR3 <= gridHeight && tPR4 <= gridHeight) { // Move Up
//     // blockCurrentPosition -= 10
//     // tetrominoesPositionCell -= 10
//     tPR1--
//     tPR2--
//     tPR3--
//     tPR4--
//     // console.log(`TPR - MOVE UP`)
//     // console.log(`TPR1 -->`, tPR1)
//     // console.log(`TPR2 -->`, tPR2)
//     // console.log(`TPR3 -->`, tPR3)
//     // console.log(`TPR4 -->`, tPR4)
//     // console.log(`TPR - MOVE UP`)
//   // } else if(key === 40 && blockCurrentPosition + gridWidth <= gridWidth * gridHeight - 1) { // Move Down
//   // } else if(key === 40 && tPR1 + gridWidth <= gridWidth * gridHeight - 1 && tPR2 + gridWidth <= gridWidth * gridHeight - 1 && tPR3 + gridWidth <= gridWidth * gridHeight - 1 && tPR4 + gridWidth <= gridWidth * gridHeight - 1) { // Move Down

//   } else if(key === 40 && tPR1 < gridHeight - 1 && tPR2 < gridHeight - 1 && tPR3 < gridHeight - 1 && tPR4 < gridHeight - 1) { 
//     // blockCurrentPosition += 10
//     // tetrominoesPositionCell += 10
//     tPR1++
//     tPR2++
//     tPR3++
//     tPR4++
//     // console.log(`TPR - MOVE DOWN`)
//     // console.log(`TPR1 -->`, tPR1)
//     // console.log(`TPR2 -->`, tPR2)
//     // console.log(`TPR3 -->`, tPR3)
//     // console.log(`TPR4 -->`, tPR4)
//     // console.log(`TPR - MOVE DOWN`)
//   } // else if(key === 32) {
//   //   tPR1+= 10
//   //   tPR2+= 10
//   //   tPR3+= 10
//   //   tPR4+= 10
//   // }

//   // addBlock(blockCurrentPosition)
//   // addTetrominoes(tetrominoesPosition)
//   addTetrominoes(tPR1, tPR2, tPR3, tPR4, tPC1, tPC2, tPC3, tPC4)
//   // addTetro(i)

// }

// document.addEventListener('keydown', handleKeyPress)

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