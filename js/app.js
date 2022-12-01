import '../css/style.css';
import '../css/reset.css';

const h1 = document.getElementsByTagName('h1')[0];
const span = document.getElementsByTagName('span')[0];

const words = ["design", "frontend", "backend", "testing"];
let wordI = 0;
let letterI = 0;

setInterval(() => {
    if (wordI === words.length) {
        wordI++
        letterI = 0;
    }
}, 100);