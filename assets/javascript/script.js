const element = document.querySelector("#home > div.home-content > h3 > span");

element.innerHTML = "";

const words = ["Desenvolvedor", "Estudante de Ciência da Computação", "Full stack"];

const typingBar = "<span style'color: white; font-weight: 200;'>|<\span>";

let letterLoop = 0;
let wordLoop = 0;

let timeDelay = 200;

setInterval(() => {
    if (letterLoop == words[wordLoop].length) {
        letterLoop = 0;
        element.innerHTML = typingBar;
        if (wordLoop == words.length - 1) {
            wordLoop = 0;
        } else {
            wordLoop ++;
        } 
    } else {
        letterLoop++;
        element.innerHTML = words[wordLoop].slice(0,[letterLoop]) + typingBar;
    }
}, timeDelay)