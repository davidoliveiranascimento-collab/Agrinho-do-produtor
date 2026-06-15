// Lista de curiosidades do Agro sustentável
const curiosidades = [
    "🌽 O Brasil está entre os maiores produtores agrícolas do mundo.",
    "🐝 As abelhas são responsáveis pela polinização de muitas culturas importantes.",
    "🌳 A agricultura sustentável ajuda a preservar os recursos naturais para o futuro.",
    "🚜 A tecnologia no campo aumenta a produtividade e reduz drasticamente os desperdícios.",
    "💧 A irrigação eficiente por gotejamento economiza água e melhora a saúde da planta.",
    "🌾 O Paraná é um dos maiores produtores agrícolas do Brasil.",
    "🌱 Solos saudáveis são a base de uma agricultura sustentável.",
    "♻️ A reciclagem de resíduos agrícolas reduz a poluição ambiental."
];

// Função para sortear curiosidades
function mostrarCuriosidade() {
    const sorteio = Math.floor(Math.random() * curiosidades.length);
    const elemento = document.getElementById("curiosidade");
    
    // Anima a troca de texto
    elemento.style.opacity = "0";
    
    setTimeout(() => {
        elemento.textContent = curiosidades[sorteio];
        elemento.style.opacity = "1";
    }, 200);
}

// Lógica do Verdadeiro ou Falso
function responderVF(resposta) {
    const campoVf = document.getElementById("vf");
    
    if (resposta === true) {
        campoVf.textContent = "✅ Exato! Sem as abelhas, nossa biodiversidade e produção de alimentos estariam em risco.";
        campoVf.className = "certo";
    } else {
        campoVf.textContent = "❌ Incorreto. As abelhas são vitais para a polinização!";
        campoVf.className = "errado";
    }
}

// Lógica do Quiz
function verificarResposta(opcao) {
    const resultado = document.getElementById("resultado");
    
    if (opcao === "b") {
        resultado.textContent = "✅ Correto! Sensores e automação evitam o desperdício de água e insumos.";
        resultado.className = "certo";
    } else {
        resultado.textContent = "❌ Incorreto! Tente analisar qual alternativa foca em eficiência e economia.";
        resultado.className = "errado";
    }
}

// Lógica do minigame de clicar nos alimentos
let pontuacao = 0;
const frutas = ["🍎", "🥦", "🌽", "🍊", "🍓", "🥕", "🍋", "🥬"];

function coletarAlimento() {
    pontuacao++;
    document.getElementById("pontos").textContent = pontuacao;
    
    // Altera o alimento de forma aleatória a cada clique
    const novaFruta = frutas[Math.floor(Math.random() * frutas.length)];
    const jogo = document.getElementById("jogo");
    
    jogo.textContent = novaFruta;
    
    // Efeito de feedback visual
    jogo.style.transform = "scale(0.9) rotate(-5deg)";
    setTimeout(() => {
        jogo.style.transform = "";
    }, 100);
}

// Adiciona transição suave ao elemento de curiosidade
document.addEventListener("DOMContentLoaded", function() {
    const curiosidadeEl = document.getElementById("curiosidade");
    if (curiosidadeEl) {
        curiosidadeEl.style.transition = "opacity 0.3s ease";
    }
});
