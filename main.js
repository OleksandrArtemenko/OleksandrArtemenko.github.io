const backgrounds = [
    'background1.jpg',
    'background2.jpg',
    'background3.jpg',
    'background4.jpg'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgrounds.length;
}