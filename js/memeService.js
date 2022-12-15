'use strict'

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [createText('',100,'center','white'), createText('',100,'center','white')]
}

var gImgs = createImages()
var gIdx = 19


function getMeme() {
    return gMeme.selectedImgId
}

function setImg(img){
    // gMeme = crateMeme(img.dataset.id)
    gMeme.selectedImgId = img.dataset.id
}

function setLineTxt(text){
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

function createImages(){
    let imgs = [ 
    {id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']},
    {id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat']},
    {id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat']},
    {id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat']},
    {id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat']},
    {id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat']},
    {id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat']},
    {id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat']},
    {id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat']},
    {id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat']},
    {id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat']},
    {id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat']},
    {id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat']},
    {id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat']},
    {id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat']},
    {id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat']},
    {id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat']},
    {id: 18, url: 'img/18.jpg', keywords: ['funny', 'cat']}]
    return imgs
}

function getMemesForDisplay(){
    return gImgs
}

function createText(txt,size,align,color){
    const text = {
        txt,
        size,
        align,
        color,
    }
    return text
}

function PickColor(value){
    gMeme.lines[gMeme.selectedLineIdx].color = value
}

function decreaseFont(){
    gMeme.lines[gMeme.selectedLineIdx].size -= 5
}

function increaseFont(){
    gMeme.lines[gMeme.selectedLineIdx].size += 5
}

function changeLine(){
    if(!gMeme.selectedLineIdx) gMeme.selectedLineIdx = 1
    else gMeme.selectedLineIdx = 0
}
