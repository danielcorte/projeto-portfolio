const element = document.querySelector("#home > div.home-content > h3 > span");

const words = ["18 years old" ,"Bosch Developer", "Computer Science Student", "Brazilian", "Full Stack", 
    "Systems Development Technician"];

const typingBar = "<span style='color: white; font-weight: 700;'>|</span>";

let letterLoop = 0;
let wordLoop = 0;
let timeDelay = 1000;
let isDeleting = false; // Indica se estamos apagando a palavra

const typeEffect = () => {
    if (!isDeleting) {
        // Fase de escrita
        element.innerHTML = words[wordLoop].slice(0, letterLoop + 1) + typingBar;
        letterLoop++;

        if (letterLoop === words[wordLoop].length) {
            // Quando a palavra termina de ser escrita, aguarda um tempo antes de começar a apagar
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pausa antes de apagar
            return;
        }
    } else {
        // Fase de remoção
        element.innerHTML = words[wordLoop].slice(0, letterLoop) + typingBar;
        letterLoop--;

        if (letterLoop === 0) {
            // Quando a palavra termina de ser apagada, vai para a próxima palavra
            isDeleting = false;
            wordLoop = (wordLoop + 1) % words.length; // Alterna entre as palavras
        }
    }

    // Ajusta a velocidade dependendo se está escrevendo ou apagando
    const delay = isDeleting ? 100 : 200;
    setTimeout(typeEffect, delay);
};

// Inicializa o efeito
typeEffect();

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