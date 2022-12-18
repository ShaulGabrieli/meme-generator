'use strict'

let gPrevOffsetX
let gPrevOffsetY
let gNewX
let gNewY
let canvasForDownload

function renderMeme(isForDowloand) {
    const strDataURI = getMemeUrl()
    var img = new Image()
    img.src = strDataURI
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        const lines = getGMemeLines()
        lines.forEach((line, idx) => {
            drawText(line.txt, line.x, line.y, line.size, line.color, line.align, line.stroke)
            const textWidth = gCtx.measureText(line.txt, line.x, line.y).width
            canvasForDownload = gElCanvas.toDataURL('image/jpg')
            gMeme.screenShot = canvasForDownload
            if (idx === gMeme.selectedLineIdx) {
                drawRect(line.x - 10, line.y - line.size + 10, textWidth + 10, line.size * 1.333)
            }
        })
    }
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
    renderMeme()
}

function renderText() {}

function onAddLine() {
    addLine()
}

// align text

function onLeftAlign() {
    const curLine = getCurLine()
    if (!curLine.txt) return
    moveText(10, curLine.y)
    renderMeme()
}

function onRightAlign() {
    const curLine = getCurLine()
    if (!curLine.txt) return
    const textWidth = gCtx.measureText(curLine.txt, curLine.x, curLine.y).width
    moveText(gElCanvas.width - textWidth - 10, curLine.y)
    renderMeme()
}

function onCenterAlign() {
    const curLine = getCurLine()
    if (!curLine.txt) return
    const textWidth = gCtx.measureText(curLine.txt, curLine.x, curLine.y).width
    moveText(gElCanvas.width / 2 - textWidth, curLine.y)
    renderMeme()
}

function onChangeStroke(strokeColor) {
    changeStroke(strokeColor)
    renderMeme()
}

function drawRect(x, y, width, height) {
    gCtx.beginPath()
    gCtx.strokeStyle = 'red'
    gCtx.strokeRect(x, y, width, height)
}

// click events

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    //Listen for resize ev
    window.addEventListener('resize', () => {
        // resizeCanvas()
        // renderMeme()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const indexOfClickedText = indexOflineClicked(ev.offsetX, ev.offsetY)
    if (indexOfClickedText > -1) {
        gIsDrag = true
        gPrevOffsetX = ev.offsetX
        gPrevOffsetY = ev.offsetY
        setSelectedLineIdx(indexOfClickedText)
        onChangeTextValue()
        renderMeme()
    }
}

function onMove(ev) {
    if (!gIsDrag) return
    if (gPrevOffsetX !== ev.offsetX || gPrevOffsetY !== ev.offsetY) {
        gElCanvas.style.cursor = 'grabbing'
        gNewX = ev.offsetX - gPrevOffsetX
        gNewY = ev.offsetY - gPrevOffsetY
        gPrevOffsetX = ev.offsetX
        gPrevOffsetY = ev.offsetY
    }

    const currLine = getCurLine()
    if (currLine.x + gNewX !== NaN && currLine.y + gNewY) {
        moveText(currLine.x + gNewX, currLine.y + gNewY)
        renderMeme()
    }
}

function onUp() {
    gElCanvas.style.cursor = 'grab'
    gIsDrag = false
}

// upload and download and share

function downloadImg(elLink) {
    
    const imgContent = gMeme.screenShot // image/jpeg the default format
    elLink.href = imgContent
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)
    // Send a post req with the image to the server
    fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
        .then((res) => res.text())
        .then((url) => {
            onSuccess(url)
        })
}

function indexOflineClicked(x, y) {
    const lines = getGMemeLines()
    let indexToReturn = -1
    lines.forEach((line, idx) => {
        const textWidth = gCtx.measureText(line.txt, line.x, line.y).width
        if (line.x - 10 < x && x < line.x + textWidth + 10 && line.y < y && y < line.y + line.size + 10) {
            indexToReturn = idx
        }
    })
    return indexToReturn
}

function onChangeTextValue() {
    const curLine = getCurLine()
    document.querySelector('.text-input').value = curLine.txt
}

function onImgInput(ev) {
    const elEditor = document.querySelector('.editor')
    const elgallery = document.querySelector('.gallery')
    const elSearch = document.querySelector('.search-box')
    elEditor.classList.remove('hide')
    elgallery.classList.add('hide')
    elSearch.classList.add('hide')
    loadImageFromInput(ev, renderImg)
}

// CallBack func will run on success load of the img
function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = (event) => {
        let img = new Image() // Create a new html img element
        img.src = event.target.result // Set the img src to the img file we read
        // Run the callBack func, To render the img on the canvas
        img.onload = () => onImageReady(img)
    }

    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}

function renderImg(img) {
    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    setImg(setNewImg(imgContent))
}

function onDeleteCanvas() {
    deleteCanvas()
    renderMeme()
}
