// Element Selectors
const grid = document.querySelector('.grid')

const gridWidth = 10
const gridHeight = 20

const rows = []
const cells = []

const blockClass = 'block'
const blockStartingPosition = 0

function createGrid() {
  for(let i = 0; i < gridHeight; i++) {
    const row = document.createElement('div')
    row.classList.add(`row`)
    row.dataset.row = `${i}`
    grid.appendChild(row)
    rows.push(row)

    for(let i = 0; i < gridWidth; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.dataset.column = `${i}`
      row.appendChild(cell)
      cells.push(cell)
    }
  }
}

createGrid()


// Trying to store tetromineos in an object
const i = {
  default: [{row: 0, cell: 1}, {row: 0, cell: 2}, {row: 0, cell: 3}, {row: 0, cell: 4}],
  rotations: [{row: 1, cell: 1}, {row: 1, cell: 2}, {row: 1, cell: 3}, {row: 1, cell: 4}],
  class: ['i'],
  isMoving: false
}

const l = {
  default: [{row: 0, cell: 0}, {row: 1, cell: 0}, { row: 2, cell: 0}, {row: 2, cell: 1}],
  rotations: [
    [{row: 0, cell: 0}, {row: 1, cell:0}, {row: 2, cell: 0}, {row: 2, cell: 1}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}]
  ],
  class: ['l'],
  isMoving: false
}

const j = {
  default: [{row: 0, cell: 1}, {row: 1, cell: 1}, {row: 2, cell: 1}, {row: 2, cell: 0}],
  rotations: [
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}]
  ],
  class: ['j'],
  isMoving: false
}

const t = {
  default: [{row: 0, cell: 1}, {row: 1, cell: 0}, {row: 1, cell: 1}, {row: 1, cell: 2}],
  rotations: [
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}]
  ],
  class: ['t'],
  isMoving: false
}

const s = {
  default: [{row: 0, cell: 1}, {row: 0, cell: 2}, { row: 1, cell: 0}, {row: 1, cell: 1}],
  rotations: [
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
  ],
  class: ['s'],
  isMoving: false
}


const z = {
  default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 1}, {row: 1, cell: 2}],
  rotations: [
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
  ],
  class: ['z'],
  isMoving: false
}


const o = {
  default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 0}, {row: 1, cell: 1}],
  class: ['o'],
  isMoving: false
}


// const o = [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 0}, {row: 1, cell: 1}]
// o.default.forEach(item => console.log(item)) - Logs Co-Ordinates for default position

// console.log(i.default)
// console.log(i.default[0].row, i.default[0].cell)
// console.log(i.default[1].row, i.default[1].cell)
// console.log(i.default[2].row, i.default[2].cell)
// console.log(i.default[3].row, i.default[3].cell)

// const tetrominoes = {
//   i: {
//     default: [{row: 0, cell: 0}, {row: 1, cell: 0}, {row: 2, cell: 0}, {row: 3, cell: 0}],
//     class: ['i']
//   },
//   l: {
//     default: [{row: 0, cell: 0}, {row: 1, cell: 0}, { row: 2, cell: 0}, {row: 2, cell: 1}],
//     class: ['l']
//   },
//   j: {
//     default: [{row: 0, cell: 1}, {row: 1, cell: 1}, {row: 2, cell: 1}, {row: 2, cell: 0}],
//     class: ['j']
//   },
//   t: {
//     default: [{row: 0, cell: 1}, {row: 1, cell: 0}, {row: 1, cell: 1}, {row: 1, cell: 2}],
//     class: ['t']
//   },
//   s: {
//     default: [{row: 0, cell: 1}, {row: 0, cell: 2}, { row: 1, cell: 0}, {row: 1, cell: 1}],
//     class: ['s']
//   },
//   z: {
//     default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 1}, {row: 1, cell: 2}],
//     class: ['z']
//   },
//   o: {
//     default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 0}, {row: 1, cell: 1}],
//     class: ['o']
//   }
// }

// console.log(tetrominoes)
// console.log(tetrominoes.i)
// console.log(tetrominoes.i.default[0])

// for(item in tetrominoes) { // Search through and object
//   console.log(item)
// }

const shapeHistory = []
const tetrominoesList = [i, l, j, t, s, z, o]
const randomShape = Math.floor(Math.random() * tetrominoesList.length)

function generateShape() {

  // console.log(`RandomShape -->`,tetrominoesList[randomShape].default.map(item => item.row += 3))
  tetrominoesList[randomShape].default.map(item => {
    tetrominoesList[randomShape].isMoving = true
    if(tetrominoesList[randomShape] === tetrominoesList[0]) { 
      return item.cell += 2
    } else {
      return item.cell += 4
    }
  })
  console.log(tetrominoesList[randomShape])
  // return addTetro(tetrominoesList[randomShape]) // -  Run This to Generate a Random Terominoe
}

generateShape()


function rotateShape() {
  console.log('rotate shape function')
}


console.log(`Shape History --> `,shapeHistory)
let currentShape = tetrominoesList[randomShape]
let holdShapeArray = []


function setholdShape() {
  holdShapeArray.push(currentShape)
  console.log(holdShapeArray)
  // then I want current shape to be a new shape
  document.querySelector('.hold').innerText = currentShape.class
}

function getHoldShape() {

}

// generateShape()


// console.log(`Current Shape --> `,currentShape)

// for(let i = 0; i < 3; i++) {
//   generateShape()
//   // Generates 3 Random shapes that could go into shape history and then pull the first in that list to be the next shape
// }
// console.log(`Shape History -->`,shapeHistory)

// generateShape()

// Array of a list of randomly generate Tetrominoes
// for(let i = 0; i < 10; i++) {
//   generateShape()
// }
// console.log(shapeHistory)

// generateShape()

// Will return the same amount of rows but you can change the rows inside the array
rows.map(row => {

})

// Checks which element contains the class/state of block
rows.forEach(row => {
  // console.log(row)

  // count how many row element contain the class of block
  // console.log(row.classList)

  row.childNodes.forEach((elem, index) => {
    if(elem.classList.contains('block')) {
      // console.log(elem) // - logs all element that contain block
      // console.log(elem.dataset.column) // - Element position in column
      // console.log(elem.parentNode.dataset.row) // - Element position in row
      // console.log(elem.parentNode)
    }
  })
})

// Checks which element doesnt contain the class of block
rows.forEach(item => {
  item.childNodes.forEach(elem => {
    if(!elem.classList.contains('block')) {
      // console.log(elem)
      // elem.style.background = 'red'
    }
  })
})

// Used for shape movement add shape to the grid when a keypress happens
function addTetro(shape) {
  shape.default.forEach(item => {
    rows[item.row].childNodes[item.cell].classList.add('block', `${shape.class[0]}`)
  })
}


// Used for shape movement remove a shape to the grid when a keypress happens
function removeTetro(shape) {
  shape.default.forEach(item => {
    // console.log(item.row, item.cell)
    rows[item.row].childNodes[item.cell].classList.remove('block', `${shape.class[0]}`)
  })
}


// This drops the shape down the grip to the next available space
function moveDown() {

  let count = 0

  const moveDownTimer = setInterval(() => {

    if(currentShape.default[0].row < gridHeight - 1 && currentShape.default[1].row < gridHeight - 1 && currentShape.default[2].row < gridHeight - 1 && currentShape.default[3].row < gridHeight - 1) {
      removeTetro(currentShape)
      currentShape.default[0].row++
      currentShape.default[1].row++
      currentShape.default[2].row++
      currentShape.default[3].row++
      addTetro(currentShape)
      // console.log('Keep Running...')
      count++
    }

    if(count > 18) {
      // console.log('Running...')
      // console.log(grid[0])
      // console.log(`count -->`,count)

      // add set class here -------------------------
      // To add collison for blocks      
      //---------------------------------------------

      // find current shapes position when stopped add a class of lock and lock that cell in place.
      
      // Set that shape in this space

      clearInterval(moveDownTimer)
    }
    // if at bottom stop moving down

  },800)

}

moveDown()

// if the div contains a class of block dont allow anther element to pass through it.
// Use a conditional if statement to check this
// if classlist.contains('.block') === false dont go through

console.log(cells.forEach(cell => cell.dataset > i.default[3].cell && !cell.classList.contains('block')))

function enableKeyPress(event) {
  const key = event.keyCode
  // console.log('enable key press')
  // removeTetro(i) // only selecting the i element, needs to selected the random element
  // e.g. removeTetro(tetrominoesList[randomShape])
  removeTetro(currentShape)

  // if 'H' is pressed run getHoldShape/setHoldShape
  if(key === 72) {
    // Switch between the hold shape and current shape with the 'H' Key
    if(holdShapeArray.length === 1) {
      getHoldShape()
      console.log('Get Hold Shape')
    } else {
      setholdShape(currentShape)
      console.log('Set Hold Shape')
    }
  }

  if(key === 39 && currentShape.default[0].cell % gridWidth !== gridWidth - 1 && currentShape.default[1].cell % gridWidth !== gridWidth - 1 && currentShape.default[2].cell % gridWidth !== gridWidth - 1 && currentShape.default[3].cell % gridWidth !== gridWidth - 1) {
    currentShape.default[0].cell++
    currentShape.default[1].cell++
    currentShape.default[2].cell++
    currentShape.default[3].cell++
  } else if(key === 37 && currentShape.default[0].cell % gridWidth !== 0 && currentShape.default[1].cell % gridWidth !== 0 && currentShape.default[2].cell % gridWidth !== 0 && currentShape.default[3].cell % gridWidth !== 0) {
    currentShape.default[0].cell--
    currentShape.default[1].cell--
    currentShape.default[2].cell--
    currentShape.default[3].cell--
  // } else if(key === 38 && currentShape.default[0].row <= gridHeight && currentShape.default[1].row <= gridHeight && currentShape.default[2].row <= gridHeight && currentShape.default[3].row <= gridHeight) {
  //   currentShape.default[0].row--
  //   currentShape.default[1].row--
  //   currentShape.default[2].row--
  //   currentShape.default[3].row--
  } else if(key === 38) {
    rotateShape()
    // Rotate function to be place in here
    // e.g. rotateShape(currentShape)
  } else if(key === 40 && currentShape.default[0].row < gridHeight - 1 && currentShape.default[1].row < gridHeight - 1 && currentShape.default[2].row < gridHeight - 1 && currentShape.default[3].row < gridHeight - 1) {
    currentShape.default[0].row++
    currentShape.default[1].row++
    currentShape.default[2].row++
    currentShape.default[3].row++
  }
  // addTetro(i) // only selecting the i element, needs to selected the random element
  addTetro(currentShape)
}

document.addEventListener('keydown', enableKeyPress)
