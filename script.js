
// Die Bilder
let myImgs = [
    "img01.jpg",
    'img02.jpg',
    'img03.jpg',
    'img04.jpg',
    'img05.jpg',
    'img06.jpg',
    'img07.jpg',
    'img08.jpg',
    'img09.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
    'img13.jpg',
    'img14.jpg',
    'img15.jpg',
    'img16.jpg',
    'img17.jpg',
    'img18.jpg',
    'img19.jpg',
    'img20.jpg',
    'img21.jpg',
    'img22.jpg',
    'img23.jpg',
    'img24.jpg',
    'img25.jpg',
    'img26.jpg',
    'img27.jpg',
    'img28.jpg',
    'img29.jpg',
    'img30.jpg',
    'img31.jpg',
    'img32.jpg',
    'img33.jpg'
];

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
    document.getElementById('imgs-numbers').innerText = `IMG ${currentIndex + 1}  `;
}

//Dialog schließen
function closeDialog() {
    document.getElementById('dialog-content').style.display = 'none';
}

// Schließt das Dialog-Element mit der ESC-Taste
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeDialog();
    }
});

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
