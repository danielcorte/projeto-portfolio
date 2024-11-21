const element = document.querySelector("#home > div.home-content > h3 > span");

element.innerHTML = "";

const words = ["Dev Bosch", "Estudante de CCo", "Full Stack"];

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

// Menu Hamburguer
document.getElementById('menu-icon').addEventListener('click', () => {
    const navList = document.querySelector('.navlist');
    navList.classList.toggle('active');
});

// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.navlist a');

// Adiciona evento de clique em cada link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove a classe "active" de todos os links
        menuLinks.forEach(item => item.classList.remove('active'));

        // Adiciona a classe "active" ao link clicado
        link.classList.add('active');
    });
});