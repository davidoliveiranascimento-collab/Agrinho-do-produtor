function mostrarCuriosidade() {function mostrarCuriosidade() {
    const curiosidades = [
        "🌽 O Brasil está entre os maiores produtores agrícolas do mundo.",
        "🐝 As abelhas são responsáveis pela polinização de muitas culturas.",
        "🌳 A agricultura sustentável ajuda a preservar os recursos naturais.",
        "🚜 A tecnologia no campo aumenta a produtividade e reduz desperdícios.",
        "💧 A irrigação eficiente economiza água e melhora a produção."
    ];

    const sorteio = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").textContent =
        curiosidades[sorteio];
}

function verificarResposta(opcao) {
    const resultado = document.getElementById("resultado");

    if (opcao === "b") {
        resultado.textContent =
            "✅ Correto! As abelhas ajudam na polinização das plantas.";
        resultado.style.color = "green";
    } else {
        resultado.textContent =
            "❌ Incorreto! A resposta certa é: Polinizar plantas.";
        resultado.style.color = "red";
    }
}
    const curiosidades = [
        "🌽 O Brasil está entre os maiores produtores agrícolas do mundo.",
        "🐝 As abelhas são responsáveis pela polinização de muitas culturas.",
        "🌳 A agricultura sustentável ajuda a preservar os recursos naturais.",
        "🚜 A tecnologia no campo aumenta a produtividade e reduz desperdícios.",
        "💧 A irrigação eficiente economiza água e melhora a produção."
    ];

    const sorteio = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").textContent =
        curiosidades[sorteio];
}<!DOCTYPE html><section class="card"><section class="card"><section class="card"><section class="card"><section class="card"><section class="card"><section class="ca<section class="card">
<h2>🏙️🤝🌾 Campo e Cidade</h2>

<img src="campo-cidade.jpg" alt="Integração entre campo e cidade" class="campo-cidade-img">

<p>
    O campo e a cidade possuem uma relação de interdependência. Enquanto o
    campo produz alimentos, fibras e matérias-primas, a cidade oferece
    tecnologia, serviços, educação e oportunidades de comércio.
</p>

<p>
    Os agricultores trabalham diariamente para produzir os alimentos que
    chegam às mesas das famílias. Já a cidade contribui com pesquisas,
    máquinas modernas e inovações que ajudam a melhorar a produção agrícola.
</p>

<p>
    Essa parceria é essencial para o desenvolvimento econômico, social e
    sustentável do país, mostrando que campo e cidade caminham juntos para
    construir um futuro melhor.
</p>
</section>
<h2>🏙️🤝🌾 Campo e Cidade</h2>

<p>
    O campo e a cidade possuem uma relação de interdependência. O campo
    fornece alimentos e matérias-primas, enquanto a cidade oferece
    tecnologias, serviços e oportunidades de comércio.
</p>

<p>
    Essa parceria fortalece a economia e contribui para o desenvolvimento
    social e sustentável de toda a população.
</p>
</section>
<h2>🌳 Preservação Ambiental</h2>

<p>
    A preservação do meio ambiente é essencial para garantir recursos para
    as futuras gerações. O solo, a água, os animais e as plantas dependem
    de ações responsáveis para permanecerem saudáveis.
</p>

<p>
    Pequenas atitudes, como reciclar materiais, economizar água e plantar
    árvores, ajudam a construir um futuro mais sustentável.
</p>
</section>
<h2>🚜 Tecnologia no Campo</h2>

<p>
    Atualmente, a agricultura utiliza diversas tecnologias para melhorar a
    produção e reduzir impactos ambientais.
</p>

<p>
    Máquinas modernas, drones, sensores e sistemas de irrigação inteligente
    ajudam os produtores a monitorar plantações e utilizar os recursos de
    forma eficiente.
</p>

<p>
    A inovação contribui para produzir mais alimentos utilizando menos água,
    menos combustível e menos desperdício.
</p>
</section>
<h2>📜 História da Agricultura</h2>

<p>
    A agricultura surgiu há milhares de anos, quando os seres humanos
    deixaram de viver apenas da caça e da coleta. Com o cultivo de plantas,
    foi possível produzir alimentos em maior quantidade e criar as primeiras
    comunidades organizadas.
</p>

<p>
    Ao longo do tempo, novas técnicas agrícolas foram desenvolvidas,
    permitindo maior produção e melhor aproveitamento dos recursos naturais.
</p>
</section>
<h2>🐛 Larvas na Natureza</h2>

<img src="larvas.jpg" alt="Larvas agrupadas na natureza" class="imagem-agrinho">

<p>
    Os insetos fazem parte do equilíbrio dos ecossistemas. Algumas espécies
    ajudam na decomposição da matéria orgânica e servem de alimento para
    outros animais, contribuindo para a biodiversidade no campo.
</p>
</section>
<h2>🤔 Verdadeiro ou Falso</h2>

<p>
    As abelhas ajudam na polinização das plantas.
</p>

<button onclick="responderVF(true)">
    Verdadeiro
</button>

<button onclick="responderVF(false)">
    Falso
</button>

<p id="vf"></p>
</section>
<h2>🌾 A Importância da Agricultura</h2>
<p>
    A agricultura é fundamental para a produção de alimentos, roupas,
    combustíveis e matérias-primas. O trabalho dos agricultores contribui
    para o desenvolvimento econômico e para a qualidade de vida das pessoas.
</p>

<p>
    Atualmente, a tecnologia ajuda os produtores rurais a economizar água,
    proteger o solo e aumentar a produtividade de forma sustentável.
</p>
</section>

<section class="card">
<h2>🌱 Sustentabilidade no Campo</h2>
<p>
    A sustentabilidade busca equilibrar a produção agrícola com a preservação
    da natureza. Algumas práticas sustentáveis incluem:
</p>

<ul>
    <li>✅ Economia de água</li>
    <li>✅ Preservação das matas</li>
    <li>✅ Reciclagem de resíduos</li>
    <li>✅ Uso consciente dos recursos naturais</li>
</ul>
</section>

<section class="card">
<h2>🖼️ Galeria do Campo</h2>

<div class="galeria">
    <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854" alt="Plantação">
    <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399" alt="Campo">
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Natureza">
</div>
</section>

<section class="card">
<h2>🎮 Jogo: Colete os Alimentos</h2>

<p>Pontuação: <span id="pontos">0</span></p>

<div id="jogo">
    🍎
</div>
</section>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Agrinho 2026</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>🌱 Projeto Agrinho</h1>
    <p>Conectando o Campo e a Cidade</p>
</header>

<main>
    <section class="card">
        <h2>Sobre o Agrinho</h2>
        <p>
            O Agrinho é um programa educacional que promove a conscientização
            sobre sustentabilidade, cidadania e a importância do campo para a sociedade.
        </p>
    </section>

    <section class="card">
        <h2>Curiosidade</h2>
        <p id="curiosidade">
            Clique no botão para descobrir uma curiosidade sobre a agricultura.
        </p>
        <button onclick="mostrarCuriosidade()">
            Mostrar Curiosidade
        </button>
    </section>

    <section class="card">
        <h2>Quiz Rápido</h2>
        <p>Qual é a principal função das abelhas na agricultura?</p>

        <button onclick="verificarResposta('a')">
            Produzir mel
        </button>

        <button onclick="verificarResposta('b')">
            Polinizar plantas
        </button>

        <button onclick="verificarResposta('c')">
            Produzir sementes
        </button>

        <p id="resultado"></p>
    </section>
</main>

<footer>
    <p>🌾 Agrinho 2026 - Educação e Sustentabilidade</p>
</footer>

<script src="script.js"></script>
</body>
</html>o.textContent =
            "✅ Correto! As abelhas ajudam na polinização das plantas.";
        resultado.style.color = "green";
    } else {
        resultado.textContent =
            "❌ Incorreto! A resposta certa é: Polinizar plantas.";
        resultado.style.color = "red";
    }
}
