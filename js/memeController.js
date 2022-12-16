'use strict'

function renderMeme() {
    const strDataURI = getMemeUrl()
    var img = new Image()
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
    img.src = strDataURI
    setTimeout(() => {
        renderText()
    })
}

function drawText(text, x, y, fontSize, fontColor, fontAlign, strokeColor) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = fontColor
    gCtx.font = fontSize + 'px impact'
    gCtx.textAlign = fontAlign
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function renderImgById(id) {
    let elImg = document.querySelector('.img' + id)
    renderMeme(elImg)
}

function onPickColor(value) {
    PickColor(value)
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onSetLineTxt(text) {
    setLineTxt(text)
    renderMeme()
}

function onChangeLine() {
    changeLine()
}

function renderText() {
    const lines = getGMemeLines()
     lines.forEach((line) => {
        drawText(line.txt, line.x, line.y, line.size, line.color, line.align, line.stroke)
    })
}

function onAddLine() {
    addLine()
}

function onLeftAlign() {
    leftAlign()
    renderMeme()
}

function onRightAlign() {
    rightAlign()
    renderMeme()
}

function onCenterAlign() {
    centerAlign()
    renderMeme()
}

function onChangeStroke(strokeColor){
    changeStroke(strokeColor)
    renderMeme()
}

