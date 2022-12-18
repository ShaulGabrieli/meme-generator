'use strict'

let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [createText('', 30, 'left', 'white', 10, 30, 'black')],
}
let gFilterBy = ''
let gImgs = createImages()
let gIdx = 19

function getMeme() {
    return gMeme.selectedImgId
}

function setImg(imgId) {
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
        { id: 1, url: 'img/meme-imgs (square)/1.jpg', keywords: ['funny', 'person', 'trump'] },
        { id: 2, url: 'img/meme-imgs (square)/2.jpg', keywords: ['funny', 'dog'] },
        { id: 3, url: 'img/meme-imgs (square)/3.jpg', keywords: ['funny', 'dog', 'baby'] },
        { id: 4, url: 'img/meme-imgs (square)/4.jpg', keywords: ['funny', 'cat'] },
        { id: 5, url: 'img/meme-imgs (square)/5.jpg', keywords: ['funny', 'person', 'baby'] },
        { id: 6, url: 'img/meme-imgs (square)/6.jpg', keywords: ['funny', 'person'] },
        { id: 7, url: 'img/meme-imgs (square)/7.jpg', keywords: ['funny', 'baby'] },
        { id: 8, url: 'img/meme-imgs (square)/8.jpg', keywords: ['funny', 'person'] },
        { id: 9, url: 'img/meme-imgs (square)/9.jpg', keywords: ['funny', 'person', 'baby'] },
        { id: 10, url: 'img/meme-imgs (square)/10.jpg', keywords: ['funny', 'person','obama'] },
        { id: 11, url: 'img/meme-imgs (square)/11.jpg', keywords: ['funny', 'person'] },
        { id: 12, url: 'img/meme-imgs (square)/12.jpg', keywords: ['funny', 'person'] },
        { id: 13, url: 'img/meme-imgs (square)/13.jpg', keywords: ['funny', 'person'] },
        { id: 14, url: 'img/meme-imgs (square)/14.jpg', keywords: ['funny', 'person'] },
        { id: 15, url: 'img/meme-imgs (square)/15.jpg', keywords: ['funny', 'person'] },
        { id: 16, url: 'img/meme-imgs (square)/16.jpg', keywords: ['funny', 'person'] },
        { id: 17, url: 'img/meme-imgs (square)/17.jpg', keywords: ['funny', 'person', 'putin'] },
        { id: 18, url: 'img/meme-imgs (square)/18.jpg', keywords: ['funny', 'cartoon'] },
    ]
    return imgs
}

function getMemesForDisplay() {
    var currImgs
    if (gFilterBy === '') currImgs = gImgs.slice()
    else {
        currImgs = gImgs.filter((img) => img.keywords.find((key) => key.includes(gFilterBy.toLowerCase())))
    }
    return currImgs
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
    if (gMeme.lines.length > 1) {
        gMeme.lines.push(createText('', 30, 'left', 'white', 10, 250, 'black'))
    } else {
        gMeme.lines.push(createText('', 30, 'left', 'white', 10, 470, 'black'))
    }
    gMeme.selectedLineIdx++
}

function changeStroke(strokeColor) {
    gMeme.lines.forEach((line) => {
        line.stroke = strokeColor
    })
}

function deleteCanvas() {
    gMeme.selectedLineIdx = 0
    gMeme.lines = [createText('', 30, 'left', 'white', 10, 30, 'black')]
}

function getCurLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function moveText(x, y) {
    gMeme.lines[gMeme.selectedLineIdx].x = x
    gMeme.lines[gMeme.selectedLineIdx].y = y
}

function setSelectedLineIdx(idx) {
    gMeme.selectedLineIdx = idx
}

function setFilter(filterBy) {
    gFilterBy = filterBy
}

function setNewImg(imgContent){
const img = createImg(imgContent)
gImgs.push(img)
return img.id
}



function createImg(imgContent){
    const img = { id: gIdx++, url: imgContent, keywords: ['funny'] }
    return img
}