'use strict'

function renderGallery() {
    const memes = getMemesForDisplay()
    const strHtmls = memes.map(
        (meme) => `
        <article class="gallery-img "><img class="img${meme.id}" data-id="${meme.id}" onclick="onImgSelect(this)" src="img/meme-imgs (square)/${meme.id}.jpg" alt=""></article>`
    )

    document.querySelector('.gallery-grid').innerHTML = strHtmls.join('')
}


function onImgSelect(elImg){
    const elEditor = document.querySelector('.editor')
    const elgallery = document.querySelector('.gallery')
    elEditor.classList.remove('hide')
    elgallery.classList.add('hide')
    onInitCanvas()
    setImg(elImg)
    renderMeme(elImg)
}

function openGallery(){
    const elgallery = document.querySelector('.gallery')
    const elEditor = document.querySelector('.editor')
    elEditor.classList.add('hide')
    elgallery.classList.remove('hide')
}