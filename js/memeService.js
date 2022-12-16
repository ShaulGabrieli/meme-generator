'use strict'

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [createText('', 100, 'center', 'white',500, 100, 'black')],
}

var gImgs = createImages()
var gIdx = 19

function getMeme() {
    return gMeme.selectedImgId
}

function setImg(imgId) {
    // gMeme = crateMeme(img.dataset.id)
    gMeme.selectedImgId = imgId
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function crateMeme(selectedImgId = gIdx++) {
    const meme = {
        selectedImgId,
        selectedLineIdx: 0,
        lines: [],
    }
    return meme
}

function createImages() {
    let imgs = [
        { id: 1, url: 'img/meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] },
        { id: 2, url: 'img/meme-imgs (square)/2.jpg', keywords: ['funny', 'cat'] },
        { id: 3, url: 'img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
        { id: 4, url: 'img/meme-imgs (square)/4.jpg', keywords: ['funny', 'cat'] },
        { id: 5, url: 'img/meme-imgs (square)/5.jpg', keywords: ['funny', 'cat'] },
        { id: 6, url: 'img/meme-imgs (square)/6.jpg', keywords: ['funny', 'cat'] },
        { id: 7, url: 'img/meme-imgs (square)/7.jpg', keywords: ['funny', 'cat'] },
        { id: 8, url: 'img/meme-imgs (square)/8.jpg', keywords: ['funny', 'cat'] },
        { id: 9, url: 'img/meme-imgs (square)/9.jpg', keywords: ['funny', 'cat'] },
        { id: 10, url: 'img/meme-imgs (square)/10.jpg', keywords: ['funny', 'cat'] },
        { id: 11, url: 'img/meme-imgs (square)/11.jpg', keywords: ['funny', 'cat'] },
        { id: 12, url: 'img/meme-imgs (square)/12.jpg', keywords: ['funny', 'cat'] },
        { id: 13, url: 'img/meme-imgs (square)/13.jpg', keywords: ['funny', 'cat'] },
        { id: 14, url: 'img/meme-imgs (square)/14.jpg', keywords: ['funny', 'cat'] },
        { id: 15, url: 'img/meme-imgs (square)/15.jpg', keywords: ['funny', 'cat'] },
        { id: 16, url: 'img/meme-imgs (square)/16.jpg', keywords: ['funny', 'cat'] },
        { id: 17, url: 'img/meme-imgs (square)/17.jpg', keywords: ['funny', 'cat'] },
        { id: 18, url: 'img/meme-imgs (square)/18.jpg', keywords: ['funny', 'cat'] },
    ]
    return imgs
}

function getMemesForDisplay() {
    return gImgs
}

function createText(txt, size, align, color, x, y, stroke) {
    const text = {
        txt,
        size,
        align,
        color,
        x,
        y,
        stroke,
    }
    return text
}

function PickColor(value) {
    gMeme.lines[gMeme.selectedLineIdx].color = value
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 5
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 5
}

function changeLine() {
    if (!gMeme.lines[gMeme.selectedLineIdx + 1]) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}

function getMemeUrl() {
    const currIdx = gMeme.selectedImgId
    const currImg = gImgs.find((img) => img.id === currIdx)
    return currImg.url
}

function getGMemeLines() {
    return gMeme.lines
}

function addLine() {
    if(gMeme.lines.length>1){
        gMeme.lines.push(createText('', 100, 'center', 'white', 500, 250))
    } else {
        gMeme.lines.push(createText('', 100, 'center', 'white', 500, 400))
    }
    gMeme.selectedLineIdx++
}

function leftAlign() {
    gMeme.lines.forEach((line) => {
        line.align = 'left'
    })
}

function rightAlign() {
    gMeme.lines.forEach((line) => {
        line.align = 'right'
    })
}

function centerAlign() {
    gMeme.lines.forEach((line) => {
        line.align = 'center'
    })
}


function changeStroke(strokeColor) {
    gMeme.lines.forEach((line) => {
        line.stroke = strokeColor
    })
}