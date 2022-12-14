'use strict'

var gMeme 

var gImgs = createImages()
var gIdx = 19


function getMeme() {
    return gMeme.selectedImgId
    
}

function setImg(img){
    gMeme = crateMeme(img.dataset.id)
}

function setLineTxt(txt){
    gMeme.lines[0] = createText(txt)
    renderImgById(gMeme.selectedImgId)
    drawText(gMeme.lines[0].txt, 100, 100,100)
    
}

function crateMeme(selectedImgId = gIdx++) {
    let meme = {
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

function createText(txt, size = 100,align='center',color='black'){
    let text = {
        txt,
        size,
        align,
        color,
    }
    return text
}