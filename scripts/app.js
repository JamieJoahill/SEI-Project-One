// Element Selectors
const grid = document.querySelector('.grid')

const gridWidth = 10
const gridHeight = 20

const rows = []
const cells = []

const blockClass = 'block'
const blockStartingPosition = 0

// Store tetromineos in an object
const i = {
  default: [{row: 0, cell: 3}, {row: 0, cell: 4}, {row: 0, cell: 5}, {row: 0, cell: 6}],
  rotations: [{row: 1, cell: 1}, {row: 1, cell: 2}, {row: 1, cell: 3}, {row: 1, cell: 4}],
  class: ['i'],
  isMoving: false
}

const l = {
  default: [{row: 0, cell: 4}, {row: 1, cell: 4}, { row: 2, cell: 4}, {row: 2, cell: 5}],
  rotations: [
    [{row: 0, cell: 0}, {row: 1, cell:0}, {row: 2, cell: 0}, {row: 2, cell: 1}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}]
  ],
  class: ['l'],
  isMoving: false
}

const j = {
  default: [{row: 0, cell: 5}, {row: 1, cell: 5}, {row: 2, cell: 5}, {row: 2, cell: 4}],
  rotations: [
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}]
  ],
  class: ['j'],
  isMoving: false
}

const t = {
  default: [{row: 0, cell: 5}, {row: 1, cell: 4}, {row: 1, cell: 5}, {row: 1, cell: 6}],
  rotations: [
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}]
  ],
  class: ['t'],
  isMoving: false
}

const s = {
  default: [{row: 0, cell: 5}, {row: 0, cell: 6}, { row: 1, cell: 5}, {row: 1, cell: 4}],
  rotations: [
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
  ],
  class: ['s'],
  isMoving: false
}


const z = {
  default: [{row: 0, cell: 4}, {row: 0, cell: 5}, { row: 1, cell: 5}, {row: 1, cell: 6}],
  rotations: [
    [{row: 0, cell: 0}, {row: 0, cell:0}, {row: 0, cell: 0}, {row: 0, cell: 0}],
  ],
  class: ['z'],
  isMoving: false
}


const o = {
  default: [{row: 0, cell: 4}, {row: 0, cell: 5}, { row: 1, cell: 4}, {row: 1, cell: 5}],
  class: ['o'],
  isMoving: false
}

const shapeHistory = []
const tetrominoesList = [i, l, j, t, s, z, o]
const randomShape = Math.floor(Math.random() * tetrominoesList.length)

let oldShape
let currentShape = tetrominoesList[randomShape]
let nextShape
let holdShapeArray = []

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
      // cell.classList.add('Empty')
      cell.dataset.column = `${i}`
      row.appendChild(cell)
      cells.push(cell)
    }
  }
}

createGrid()

function generateShape() {

  tetrominoesList[randomShape].default.map(item => {
    tetrominoesList[randomShape].isMoving = true
  })

  shapeHistory.push(tetrominoesList[randomShape])
  // return addTetro(tetrominoesList[randomShape]) // -  Run This to Generate a Random Terominoe

}

// setInterval(() => {
//     generateShape()
// }, 2000);


function rotateShape() {
  console.log('rotate shape function')
}

function setholdShape() {
  holdShapeArray.push(currentShape)
  console.log(holdShapeArray)
  // then I want current shape to be a new shape
  document.querySelector('.hold').innerText = currentShape.class
}

function getHoldShape() {

}

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

  const moveDownTimer = setInterval(() => {

    if(currentShape.default[0].row < gridHeight - 1 && currentShape.default[1].row < gridHeight - 1 && currentShape.default[2].row < gridHeight - 1 && currentShape.default[3].row < gridHeight - 1) {

      removeTetro(currentShape)

      currentShape.default[0].row++
      currentShape.default[1].row++
      currentShape.default[2].row++
      currentShape.default[3].row++

      addTetro(currentShape)

      // console.log('Keep Running...')

    }
    // console.log(count)
    // if(count >= gridHeight - 2) { - current shape block lowest row point
    if(currentShape.default[0].row >= gridHeight - 1 || currentShape.default[1].row >= gridHeight - 1 || currentShape.default[2].row >= gridHeight - 1 || currentShape.default[3].row >= gridHeight - 1) {
      // console.log('Running...')
      // console.log(grid[0])
      // console.log(`count -->`,count)

      // add set class here -------------------------
      // To add collison for blocks      
      //---------------------------------------------

      // find current shapes position when stopped add a class of lock and lock that cell in place.
      stopAndLock(currentShape)
      // Set that shape in this space

      // Somehow remove the old shape and leave locked shape

      clearInterval(moveDownTimer)
    }
    // if at bottom stop moving down

  }, 800)

}

// moveDown()


// setInterval(() => {
  
// }, interval);

// console.log(rows)


function stopAndLock(currentShape) {

  console.log(`From Stop and Lock -->`, currentShape)
  console.log(document.querySelectorAll('block i'))

  currentShape.isMoving = false

  currentShape.default.forEach(item => {
    rows[item.row].childNodes[item.cell].classList.add('locked', `${currentShape.class[0]}`)
    rows[item.row].childNodes[item.cell].classList.remove('block', `${currentShape.class[0]}`)
  })
}

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

  if(key === 87) {

    generateShape()

  }

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
