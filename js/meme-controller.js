'use strict'
console.log('controller loaded');

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    renderImgs();
    // renderTags();
}

function onGalImgClick(id) {
    setSelectedImgId(id);
    drawImg2();
    toggleControl();

}

function toggleControl() {
    var elCanvas = document.querySelector('.canvas-container');
    elCanvas.classList.toggle("hidden");
    var elGallery = document.querySelector('.gallery-container');
    elGallery.classList.toggle("hidden");
}

function drawImg2() {
    var id = getSelectedImgId();
    var img = new Image()
    img.src = getImgUrl(id);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText();
    }
}


function drawText() {
    var lines = getLines();
    lines.forEach(line => {
        gCtx.lineWidth = '2';
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.size}px Impact`;
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt, gCanvas.width / 2, line.height);
        gCtx.strokeText(line.txt, gCanvas.width / 2, line.height);
    });
}

function onImput(txt) {
    setTxt(txt);
    drawImg2();
}

function onFontChange(delta) {
    fontChange(delta);
    drawImg2();
}

function onLinePosChange(delta) {
    LinePosChange(delta);
    drawImg2();
}

function renderImgs(tagVal) {
    var elgallery = document.querySelector('.gallery-container');
    var elInput = document.querySelector('.search-input');
    var strHtml = ``;
    var keyword = (!tagVal) ? elInput.value : tagVal
    // var imgs = getImgs(elInput.value);
    var imgs = getImgs(keyword);
    imgs.forEach(img => {
        strHtml += `<img onclick="onGalImgClick(${img.id})" class="box-img" src="${img.url}" >`;
    });
    elgallery.innerHTML = strHtml;
    renderTags();
}

function renderTags() {
    var elTags = document.querySelector('.tags');
    var strHtml = ``;
    for (const key in gKeywords) {
        strHtml += `<li onclick="renderImgs(this.innerText)" style="font-size:${16*(1+(gKeywords[key]/40))}px">${key}</li>`;
    }
    elTags.innerHTML = strHtml;
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'meme'
}

function OnSwitchLine() {
    document.querySelector('.meme-input').value = '';
    switchLine();
}

function onAddLine() {
    addLine();
    drawImg2();
}

function onRemoveLine() {
    removeLine();
    drawImg2();
}

function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    mainMenu.classList.toggle('open');
}