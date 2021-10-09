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

const i = {
  default: [{row: 0, cell: 0}, {row: 1, cell: 0}, {row: 2, cell: 0}, {row: 3, cell: 0}],
  rotations: [{row: 1, cell: 1}, {row: 1, cell: 2}, {row: 1, cell: 3}, {row: 1, cell: 4}],
  class: ['i']
}

const l = {
  default: [{row: 0, cell: 0}, {row: 1, cell: 0}, { row: 2, cell: 0}, {row: 2, cell: 1}],
  class: ['l']
}

const j = {
  default: [{row: 0, cell: 1}, {row: 1, cell: 1}, {row: 2, cell: 1}, {row: 2, cell: 0}],
  class: ['j']
}

const t = {
  default: [{row: 0, cell: 1}, {row: 1, cell: 0}, {row: 1, cell: 1}, {row: 1, cell: 2}],
  class: ['t']
}

const s = {
  default: [{row: 0, cell: 1}, {row: 0, cell: 2}, { row: 1, cell: 0}, {row: 1, cell: 1}],
  class: ['s']
}


const z = {
  default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 1}, {row: 1, cell: 2}],
  class: ['z']
}


const o = {
  default: [{row: 0, cell: 0}, {row: 0, cell: 1}, { row: 1, cell: 0}, {row: 1, cell: 1}],
  class: ['o']
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

// for(item in tetrominoes) { // Search through and object
//   console.log(item)
// }

const shapeHistory = []

function generateShape() {

  const tetrominoesList = [i, l, j, t, s, z, o]
  const randomShape = Math.floor(Math.random() * tetrominoesList.length)
  shapeHistory.push(tetrominoesList[randomShape])
  return addTetro(tetrominoesList[randomShape])

}

// Array of a list of randomly generate Tetrominoes
// for(let i = 0; i < 10; i++) {
//   generateShape()
// }
// console.log(shapeHistory)

// generateShape()

function addTetro(shape) {
  shape.default.forEach(item => {
    rows[item.row].childNodes[item.cell].classList.add('block', `${shape.class[0]}`)
  })
}

// addTetro(i)

function removeTetro(shape) {
  shape.default.forEach(item => {
    // console.log(item.row, item.cell)
    rows[item.row].childNodes[item.cell].classList.remove('block', `${shape.class[0]}`)
  })
}

let currentShape = generateShape()


function moveDown() {

  let count = 0

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

      // add set class here -------------------------
      // To add collison for blocks      
      //---------------------------------------------


      clearInterval(moveDownTimer)
    }
    // if at bottom stop moving down

  },800)

}

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
