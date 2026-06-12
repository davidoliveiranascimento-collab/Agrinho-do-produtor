// Lista de curiosidades do Agro sustentável
const curiosidades = [
    "🌽 O Brasil está entre os maiores produtores agrícolas do mundo.",
    "🐝 As abelhas são responsáveis pela polinização de muitas culturas importantes.",
    "🌳 A agricultura sustentável ajuda a preservar os recursos naturais para o futuro.",
    "🚜 A tecnologia no campo aumenta a produtividade e reduz drasticamente os desperdícios.",
    "💧 A irrigação eficiente por gotejamento economiza água e melhora a saúde da planta."
];

// Função para sortear curiosidades
function mostrarCuriosidade() {
    const sorteio = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("curiosidade").textContent = curiosidades[sorteio];
}

// Lógica do Verdadeiro ou Falso
function responderVF(resposta) {
    const campoVf = document.getElementById("vf");
    if (resposta === true) {
        campoVf.textContent = "✅ Exato! Sem as abelhas, nossa biodiversidade e produção de alimentos estariam em risco.";
        campoVf.style.color = "green";
    } else {
        campoVf.textContent = "❌ Incorreto. As abelhas são vitais para a polinização!";
        campoVf.style.color = "red";
    }
}

// Lógica do Quiz
function verificarResposta(opcao) {
    const resultado = document.getElementById("resultado");
    if (opcao === "b") {
        resultado.textContent = "✅ Correto! Sensores e automação evitam o desperdício de água e insumos.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Incorreto! Tente analisar qual alternativa foca em eficiência e economia.";
        resultado.style.color = "red";
    }
}

// Lógica do minigame de clicar nos alimentos
let pontuacao = 0;
const frutas = ["🍎", "🥦", "🌽", "🍊", "🍓"];

function coletarAlimento() {
    pontuacao++;
    document.getElementById("pontos").textContent = pontuacao;
    
    // Altera o alimento de forma aleatória a cada clique
    const novaFruta = frutas[Math.floor(Math.random() * frutas.length)];
    document.getElementById("jogo").textContent = novaFruta;
}
