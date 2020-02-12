'use strict'
console.log('controller loaded');

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    renderImgs();
    // drawImg2(4);
}

function onGalImgClick(id) {
    setSelectedImgId(id);
    drawImg2();
    // var elCanvas = document.querySelector('.canvas-container');
    // elCanvas.classList.toggle("hidden");
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


function drawText(ev) {
    // const offsetX = ev.offsetX;
    // const offsetY = ev.offsetY;
    var line = getLine();
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = line.color;
    gCtx.font = `${line.size}px Impact`;
    gCtx.textAlign = line.align;
    gCtx.fillText(line.txt, gCanvas.width / 2, 100);
    gCtx.strokeText(line.txt, gCanvas.width / 2, 100);
}

function onImput(txt) {
    var id
    setTxt(txt);
    drawImg2(4);
}

function renderImgs() {
    var elgallery = document.querySelector('.gallery-container');
    var strHtml = ``;
    gImgs.forEach(img => {
        strHtml += `<img onclick="onGalImgClick(${img.id})" class="box-img" src="${img.url}" >`;
    });
    elgallery.innerHTML = strHtml;
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'meme'
}