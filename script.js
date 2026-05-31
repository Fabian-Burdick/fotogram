
// Photos
let myImgs = [
    'Bar.jpg',
    'Berg2.jpg',
    'Berge.jpg',
    'Bergen.jpg',
    'Bergen2.jpg',
    'Bergen3.jpg',
    'Braten.jpg',
    'Braten2.jpg',
    'Brücke.jpg',
    'Desert.jpg',
    'Fischbrötchen.jpg',
    'Grün.jpg',
    'Grün2.jpg',
    'Haus.jpg',
    'Häuser.jpg',
    'Insel.jpg',
    'Longdrinks.jpg',
    'McDonalds.jpg',
    'MeinSchiffKrabbe.jpg',
    'Omelette.jpg',
    'Schiff.jpg',
    'Schinken.jpg',
    'Schlange.jpg',
    'SchöneAusicht.jpg',
    'See.jpg',
    'See2.jpg',
    'See3.jpg',
    'Seetag.jpg',
    'Seetag2.jpg',
    'Seetag3.jpg',
    'Sonnenaufgang.jpg',
    'Sonnenuntergang.jpg',
    'Wald.jpg'
];

let currentIndex = 0;

//Body Onload
function init() {
    addImg();
    // setupOverlayListener();
}

// 1. Add Gallery
function addImg() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';
    for (let index = 0; index < myImgs.length; index++) {
        // click open Dialog in actual number
        contentRef.innerHTML += `<button onclick="openDialog(${index})"><img class="album" src="./assets/img/${myImgs[index]}" alt="Bild ${index + 1}"></button>`;
    }
}

// 3. Show Photos in Dialog
function updateDialog(index) {
    currentIndex = index;
    document.getElementById('dialogImg').innerHTML = `<img class="dialog-img" src="./assets/img/${myImgs[index]}" alt="Bild ${index + 1}">`;
    document.getElementById('numbers').innerHTML = `<p>${currentIndex + 1} / ${myImgs.length}</p>`;
    document.getElementById('imgsNumbers').innerHTML = `<p>${myImgs[index].split('.')[0]}</p>`;
}

const dialogRef = document.getElementById("dialogContent");

// 2. Open Dialog with Index
function openDialog(index) {
    dialogRef.showModal();
    updateDialog(index);
}

//Dialog close
function closeDialog() {
    dialogRef.close();
}

// Prev Photo
function showPrevImg() {
    if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
    } else {
        currentIndex = myImgs.length - 1;
    }
    updateDialog(currentIndex);
}

//Next Photo
function showNextImg() {
    if (currentIndex < myImgs.length - 1) {
        currentIndex = currentIndex + 1;
    } else {
        currentIndex = 0;
    }
    updateDialog(currentIndex);
}







