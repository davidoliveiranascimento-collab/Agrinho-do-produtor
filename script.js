/* ===========================
   NAVEGAÇÃO POR ABAS
=========================== */
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.section');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const alvo = btn.dataset.section;

    tabBtns.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(alvo).classList.add('active');
  });
});

/* ===========================
   CURIOSIDADES
=========================== */
const curiosidades = [
  "🌽 O Brasil está entre os maiores produtores agrícolas do mundo, exportando para mais de 100 países.",
  "🐝 As abelhas são responsáveis pela polinização de cerca de 70% das culturas alimentares do planeta.",
  "🌳 A agricultura sustentável ajuda a preservar os recursos naturais para as próximas gerações.",
  "🚜 A tecnologia no campo pode aumentar a produtividade em até 30% e reduzir o desperdício de insumos.",
  "💧 A irrigação por gotejamento economiza até 50% de água em comparação aos métodos tradicionais.",
  "🌱 O Paraná é um dos estados com maior produção agrícola do Brasil, especialmente de soja e milho."
];

let ultimaCuriosidade = -1;

function mostrarCuriosidade() {
  let sorteio;
  do {
    sorteio = Math.floor(Math.random() * curiosidades.length);
  } while (sorteio === ultimaCuriosidade);

  ultimaCuriosidade = sorteio;
  document.getElementById('curiosidade-texto').textContent = curiosidades[sorteio];
}

/* ===========================
   VERDADEIRO OU FALSO
=========================== */
function responderVF(resposta) {
  const campo = document.getElementById('vf-resultado');

  if (resposta === true) {
    campo.textContent = '✅ Correto! Sem as abelhas, nossa biodiversidade e produção de alimentos estariam em sério risco.';
    campo.className = 'quiz-resultado certo';
  } else {
    campo.textContent = '❌ Incorreto. As abelhas são vitais para a polinização de grande parte dos nossos alimentos!';
    campo.className = 'quiz-resultado errado';
  }
}

/* ===========================
   QUIZ
=========================== */
function verificarResposta(opcao) {
  const resultado = document.getElementById('quiz-resultado');

  if (opcao === 'b') {
    resultado.textContent = '✅ Correto! Sensores e automação evitam o desperdício de água e insumos, tornando o campo mais sustentável.';
    resultado.className = 'quiz-resultado certo';
  } else {
    resultado.textContent = '❌ Incorreto. Tente novamente: qual alternativa foca em eficiência e economia de recursos?';
    resultado.className = 'quiz-resultado errado';
  }
}

/* ===========================
   MINIGAME - COLETAR ALIMENTOS
=========================== */
let pontuacao = 0;
const frutas = ['🍎', '🥦', '🌽', '🍊', '🍓', '🥕', '🍋', '🫐'];

function coletarAlimento() {
  pontuacao++;
  document.getElementById('pontos').textContent = pontuacao;

  const jogoEl = document.getElementById('jogo');
  let novaFruta;
  do {
    novaFruta = frutas[Math.floor(Math.random() * frutas.length)];
  } while (novaFruta === jogoEl.textContent);

  jogoEl.textContent = novaFruta;

  // Feedback visual de clique
  jogoEl.style.background = '#b2dfcc';
  setTimeout(() => {
    jogoEl.style.background = '';
  }, 150);
}

// Suporte a teclado no minigame
document.getElementById('jogo').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    coletarAlimento();
  }
});
