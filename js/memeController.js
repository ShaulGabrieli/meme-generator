'use strict'


function renderMeme(img) {
    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(text, x, y, fontSize, fontColor) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = fontColor
    gCtx.font = fontSize + 'px impact'
    gCtx.textAlign = 'left'
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
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    decreaseFont()
    renderImgById(gMeme.selectedImgId)
    drawText(selectedLine.txt, 100, 100, selectedLine.size, selectedLine.color)
}

function onIncreaseFont() {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    increaseFont()
    renderImgById(gMeme.selectedImgId)
    drawText(selectedLine.txt, 100, 100, selectedLine.size, selectedLine.color)
}

function onSetLineTxt(text) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    const prevSelectedLine = gMeme.lines[gMeme.selectedLineIdx - 1]
    const nextSelectedLine = gMeme.lines[gMeme.selectedLineIdx + 1]
    renderImgById(gMeme.selectedImgId)
    if (!gMeme.selectedLineIdx) {
        setLineTxt(text)
        drawText(nextSelectedLine.txt, 100, 400, nextSelectedLine.size, nextSelectedLine.color)
        drawText(selectedLine.txt, 100, 100, selectedLine.size, selectedLine.color)
    } else {
        setLineTxt(text)
        drawText(prevSelectedLine.txt, 100, 100, prevSelectedLine.size, prevSelectedLine.color)
        drawText(selectedLine.txt, 100, 400, selectedLine.size, selectedLine.color)
    }
}

function onChangeLine() {
    changeLine()
}
