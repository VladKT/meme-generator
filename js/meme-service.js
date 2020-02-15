'use strict'
console.log('service loaded');

var gKeywords = { 'success': 5, 'actor': 10, 'cat':50, 'politics':20 };

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['politics','trump'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['dog','cute'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['baby', 'dog'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['cat','tired'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['success','success kid'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['aliens'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['baby','success'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['tell me more','actor'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['baby', 'evil','success'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['obama','politics'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['kiss'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['point'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['cheers','leo','actor','success'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['morpheus','what if i told you','actor'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['lotr','one does not simply','actor'] },
    { id: 16, url: 'meme-imgs/16.jpg', keywords: ['picard','actor'] },
    { id: 17, url: 'meme-imgs/17.jpg', keywords: ['politics','putin'] },
    { id: 18, url: 'meme-imgs/18.jpg', keywords: ['toy story','everywhere'] },
];
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        { txt: 'top line', size: 60, align: 'center', color: 'white', height: 80 },
        { txt: 'bottom line', size: 60, align: 'center', color: 'white', height: 450 }]
}
function getImgs2() {
    return gImgs;
}

function getImgs(keyword) {
    if (!keyword) return gImgs;
    return gImgs.filter(img => img.keywords.includes(keyword));
}

function getImgUrl(id) {
    updateSelectedId(id);
    return gImgs[id - 1].url;
}

function updateSelectedId(id) {
    gMeme.selectedImgId = id;
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}
function getLines() {
    return gMeme.lines;
}

function setTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function setSelectedImgId(id) {
    gMeme.selectedImgId = id;
    console.log('current id selected: ' + gMeme.selectedImgId)
}

function getSelectedImgId() {
    return gMeme.selectedImgId;
}

function fontChange(delta) {
    gMeme.lines[gMeme.selectedLineIdx].size += delta;
}


function LinePosChange(delta) {
    gMeme.lines[gMeme.selectedLineIdx].height += delta;
}

function switchLine() {
    (gMeme.selectedLineIdx === gMeme.lines.length - 1) ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++;
}

function addLine() {
    gMeme.lines.push({ txt: 'mid line', size: 60, align: 'center', color: 'white', height: gCanvas.height / 2 });
}

function removeLine() {
    if (gMeme.lines.length === 1) return;
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx--;
     gMeme.lines.pop();
}