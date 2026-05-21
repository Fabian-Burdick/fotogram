
// Die Bilder
let myImgs = ["12019-godafoss-1840758.jpg",
    '12019-iceland-2111810.jpg',
    '7010naoto-cherryblossoms-9715202.jpg',
    'anek0o-etretat-10134406.png',
    'atlantios-boat-3292934.jpg',
    'ekamelev-insect-3060397.jpg',
    'jan_meyes-winter-8481557.jpg',
    'ludo-photos-church-4964183.jpg',
    'myrichagnon-fire-9550265.jpg',
    'mystraysoul-iris-5350997.jpg',
    'naturfreund_pics-iceland-4493216.jpg',
    'olcayertem-person-6065005.jpg',
    'paul_reuss-patagonia-10020972.jpg',
    'ruslansikunov-chamomile-10065194.jpg',
    'techbro347-rowan-6596302.jpg',
    'vladgudzovskiy-squirrel-4574759.jpg'];

let currentIndex = 0;

function init() {
    addImg();
}

// Fügt die Bilder ins HTML ein (For-Schleife)
function addImg() {
    let contentRef = document.getElementById('content');
    for (let index = 0; index < myImgs.length; index++) {
        contentRef.innerHTML += `<img onclick="openDialog(${index})" class="album" src="./assets/img/${myImgs[index]}" alt="Bild ${index + 1}">`;
    }
}

let dialogRef = document.getElementById("dialog-content")

//Dialog öffnen
function openDialog(index) {
    currentIndex = index;
    updateDialog();
    document.getElementById('dialog-content').style.display = 'flex';
}

//Öffnet das angeklickte Bild
function updateDialog() {
    let ImageSrc = `assets/img/${myImgs[currentIndex]}`
    document.getElementById('dialogImg').src = ImageSrc;
    document.getElementById('numbers').innerText = `${currentIndex + 1} / ${myImgs.length}`; // P tag eingebunden und zählt Zahl im Overlay Hoch und Runter
}

//Dialog schließen
function closeDialog() {
    document.getElementById('dialog-content').style.display = 'none';
}

// Vorheriges Bild
function showPrevImg() {
    if (currentIndex > 0) {                   //Wenn currentIndex größer als 0
        currentIndex = currentIndex - 1;      //Wenn currentIndex eins weniger  
    } else {
        currentIndex = myImgs.length - 1;
    }
    updateDialog();
}

//Nächstes Bild
function showNextImg() {
    if (currentIndex < myImgs.length - 1) {
        currentIndex = currentIndex + 1;
    } else {
        currentIndex = 0;
    }
    updateDialog();
}


window.onload = function () {
    init();
    setupOverlayListener();
};
