let squares = document.querySelectorAll('[div-box]')
let turnTracker = document.querySelector('[div-turn-tracker]')
let gameOutcome = document.querySelector('[div-game-outcome]')
let restartButton = document.querySelector('[button-restart]')
let line = document.createElement('img')
let xMove = true


line.src = "line.svg"

gameStart()

function gameStart() {
    for (i of squares) {
        i.addEventListener('mouseover', mouseover)
        i.addEventListener('mouseout', mouseout)
        i.addEventListener('click', nextMove)
    }
    xMove = true
}

function nextMove() {
    this.removeEventListener('mouseover', mouseover)
    this.removeEventListener('mouseout', mouseout)
    this.classList.remove('mouseover')
    this.style.cursor = "default"
    if (xMove) {
        this.textContent = 'X'
        xMove = false
        turnTracker.textContent = `O's turn`
        winCheck('X')
    } else {
        this.textContent = 'O'
        xMove = true
        turnTracker.textContent = `X's turn`
        winCheck('O')
    }
    this.removeEventListener('click', nextMove)
}

function winCheck(symbol) {
    if ((  squares[0].textContent == symbol
        && squares[1].textContent == symbol
        && squares[2].textContent == symbol)
        ||
            (  squares[3].textContent == symbol
            && squares[4].textContent == symbol
            && squares[5].textContent == symbol)
        ||
            (  squares[6].textContent == symbol
            && squares[7].textContent == symbol
            && squares[8].textContent == symbol)
        ||
            (  squares[0].textContent == symbol
            && squares[3].textContent == symbol
            && squares[6].textContent == symbol)
        ||
            (  squares[1].textContent == symbol
            && squares[4].textContent == symbol
            && squares[7].textContent == symbol)
        ||
            (  squares[2].textContent == symbol
            && squares[5].textContent == symbol
            && squares[8].textContent == symbol)
        ||
            (  squares[0].textContent == symbol
            && squares[4].textContent == symbol
            && squares[8].textContent == symbol)
        ||
            (  squares[2].textContent == symbol
            && squares[4].textContent == symbol
            && squares[6].textContent == symbol)) {
        winner(symbol)
    } else if (squares[0].textContent != ''
            && squares[1].textContent != ''
            && squares[2].textContent != ''
            && squares[3].textContent != ''
            && squares[4].textContent != ''
            && squares[5].textContent != ''
            && squares[6].textContent != ''
            && squares[7].textContent != ''
            && squares[8].textContent != '') {
        draw()
    }
}

function winner(symbol) {
    gameFinished()
    turnTracker.textContent = ''
    gameOutcome.textContent = `${symbol} won!`
    drawLine(symbol)
}

function draw() {
    gameFinished()
    turnTracker.textContent = ''
    gameOutcome.textContent = `Draw!`
}

function gameFinished() {
    for (i of squares) {
        i.removeEventListener('click', nextMove)
        i.removeEventListener('mouseover', mouseover)
        i.removeEventListener('mouseout', mouseout)
    }
}

restartButton.addEventListener('click', () => {
    turnTracker.textContent = `X's turn`
    gameOutcome.textContent = ''
    clearSquares()
    gameStart()
})

function clearSquares() {
    for (i of squares) {
        i.textContent = ''
    }
}

function mouseover() {
    this.style.cursor = "pointer"
    if (this.textContent == '') {
        if (xMove) {
            this.textContent = 'X'
        } else {
            this.textContent = 'O'
        }
        this.classList.add('mouseover')
    }
}

function mouseout() {
    this.style.cursor = "default"
    this.textContent = ''
    this.classList.remove('mouseover')
}

function drawLine(symbol) {
    line.classList.remove('horizontalLine')
    line.classList.remove('verticalLine')
    line.classList.remove('obliqueToRightLine')
    line.classList.remove('obliqueToLeftLine')
    if (squares[0].textContent == symbol
        && squares[1].textContent == symbol
        && squares[2].textContent == symbol) {

            squares[1].appendChild(line)
            line.classList.add('horizontalLine')

    } else if (squares[3].textContent == symbol
            && squares[4].textContent == symbol
            && squares[5].textContent == symbol) {

            squares[4].appendChild(line)
            line.classList.add('horizontalLine')

    } else if (squares[6].textContent == symbol
            && squares[7].textContent == symbol
            && squares[8].textContent == symbol) {

            squares[7].appendChild(line)
            line.classList.add('horizontalLine')

    } else if (squares[0].textContent == symbol
            && squares[3].textContent == symbol
            && squares[6].textContent == symbol) {

            squares[3].appendChild(line)
            line.classList.add('verticalLine')

    } else if (squares[1].textContent == symbol
            && squares[4].textContent == symbol
            && squares[7].textContent == symbol) {

            squares[4].appendChild(line)
            line.classList.add('verticalLine')

    } else if (squares[2].textContent == symbol
            && squares[5].textContent == symbol
            && squares[8].textContent == symbol) {

            squares[5].appendChild(line)
            line.classList.add('verticalLine')

    } else if (squares[0].textContent == symbol
            && squares[4].textContent == symbol
            && squares[8].textContent == symbol) {

            squares[4].appendChild(line)
            line.classList.add('obliqueToRightLine')

    } else if (squares[2].textContent == symbol
            && squares[4].textContent == symbol
            && squares[6].textContent == symbol) {

            squares[4].appendChild(line)
            line.classList.add('obliqueToLeftLine')

    }
}