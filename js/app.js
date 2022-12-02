import '../css/style.css';
import '../css/reset.css';

const h1 = document.getElementsByTagName('h1')[0];
const span = document.getElementsByTagName('span')[0];

const words = ["design", "frontend", "backend", "testing"];
let wordI = 0;
let letterI = 0;

setInterval(() => {
    if (letterI === words[wordI].length) {
        if (wordI === words.length - 1) {
            wordI = 0;
            letterI = 0;
            span.innerText = "";
        } else {
            wordI++
            letterI = 0;
            span.innerText = "";
        }
    } else {
        span.innerText += words[wordI][letterI]
        letterI++
    }
}, 200);