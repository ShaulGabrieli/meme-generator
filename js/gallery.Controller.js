'use strict'

function renderGallery() {
    const memes = getMemesForDisplay()
    const strHtmls = memes.map(
        (meme) => `
        <article class="gallery-img "><img class="img${meme.id}" data-id="${meme.id}" onclick="onImgSelect(${meme.id})" src="img/meme-imgs (square)/${meme.id}.jpg" alt=""></article>`
    )

    document.querySelector('.gallery-grid').innerHTML = strHtmls.join('')
}


function onImgSelect(imgId){
    const elEditor = document.querySelector('.editor')
    const elgallery = document.querySelector('.gallery')
    const elSearch = document.querySelector('.search-box')
    elEditor.classList.remove('hide')
    elgallery.classList.add('hide')
    elSearch.classList.add('hide')
    setImg(imgId)
    renderMeme()
}

function openGallery(){
    const elgallery = document.querySelector('.gallery')
    const elEditor = document.querySelector('.editor')
    const elSearch = document.querySelector('.search-box')
    elEditor.classList.add('hide')
    elgallery.classList.remove('hide')
    elSearch.classList.remove('hide')
}

  // filter 

function onSetFilter(filterBy) {
    setFilter(filterBy)
    renderGallery()
}