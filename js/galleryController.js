'use strict'

function renderGallery() {
    var memes = getMemesForDisplay()
    var strHtmls = memes.map(
        (meme) => `
        <article class="gallery-img "><img class="img${meme.id}" data-id="${meme.id}" onclick="onImgSelect(this)" src="img/meme-imgs (square)/${meme.id}.jpg" alt=""></article>`
    )

    document.querySelector('.gallery-grid').innerHTML = strHtmls.join('')
}


function onImgSelect(elImg){
    setImg(elImg)
    renderMeme(elImg)
}