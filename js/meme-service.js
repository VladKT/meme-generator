'use strict'
console.log('service loaded');

var gKeywords = { 'happy': 12, 'funny puk': 1 };

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['trump'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['dog'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['baby','dog'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['cat'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['cat'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['cat'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['trump'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['dog'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['baby','dog'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['cat'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['cat'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['cat'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['cat'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['cat'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['cat'] },
    { id: 16, url: 'meme-imgs/16.jpg', keywords: ['cat'] },
    { id: 17, url: 'meme-imgs/17.jpg', keywords: ['cat'] },
    { id: 18, url: 'meme-imgs/18.jpg', keywords: ['cat'] },
                ];
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ txt: 'I never eat Falafel', size: 60, align: 'center', color: 'white', height: 100 }]
}

function getImgUrl(id) {
    updateSelectedId(id);
    return gImgs[id-1].url;
}

function updateSelectedId(id) {
    gMeme.selectedImgId =id;
}

function getLine(){
    return gMeme.lines[gMeme.selectedLineIdx];
}

function setTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function setSelectedImgId(id) {
    gMeme.selectedImgId = id;
    console.log('current id selected: ' + gMeme.selectedImgId )
}

function getSelectedImgId() {
    return gMeme.selectedImgId;
}

function fontChange(delta){
    gMeme.lines[gMeme.selectedLineIdx].size += delta;
}


function LinePosChange(delta) {
    gMeme.lines[gMeme.selectedLineIdx].height += delta;
}