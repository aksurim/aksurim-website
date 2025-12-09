/**
 * Sys Aksurim (SA)
 * Copyright (c) 2024 Aksurim Software. Todos os direitos reservados.
 * Produtora: Aksurim Software
 * Website: https://aksurim.com
 */

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Cores do Blueprint
const particleColors = ['#DAF043', '#06777F'];

// Propriedades das partículas
let maxParticles = 100;
const particleSize = 3;
const connectionDistance = 150;

// Classe para representar uma partícula
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * particleSize + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
    }

    // Atualiza a posição da partícula
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }

    // Desenha a partícula
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Define o número de partículas com base na largura da tela
function setParticleCount() {
    if (window.innerWidth < 768) {
        maxParticles = 40;
    } else {
        maxParticles = 100;
    }
}

// Cria o array de partículas
function init() {
    setParticleCount();
    particlesArray = [];
    for (let i = 0; i < maxParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Loop de animação
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    // A função connect() foi removida daqui para não desenhar as linhas.
    requestAnimationFrame(animate);
}

// Redimensiona o canvas quando a janela muda de tamanho
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); // Reinicia as partículas com a contagem correta
});

init();
animate();