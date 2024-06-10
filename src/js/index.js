// Esse código em JS controla a exibição de cartões em uma interface, permitindo que o usuário avance ou volte 
// pelos cartões usando os botões "Avançar" e "Voltar".

// Obtém o botão de avançar pelo seu ID
const btnAvancar = document.getElementById("btn-avancar");
// Obtém o botão de voltar pelo seu ID
const btnVoltar = document.getElementById("btn-voltar");

// Inicializa a variável que controla o cartão atual exibido
let cartaoAtual = 0;

// Seleciona todos os elementos com a classe "cartao" e armazena na variável 'cartoes'
const cartoes = document.querySelectorAll(".cartao");

// Adiciona um ouvinte de evento de clique ao botão de avançar
btnAvancar.addEventListener("click", function () {
    // Verifica se o cartão atual é o último cartão
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    // Se for o último cartão, sai da função para não avançar mais
    if (ehUltimoCartao) return;

    // Chama a função para esconder o cartão atualmente selecionado
    esconderCartaoSelecionado();
    // Incrementa a variável 'cartaoAtual' para avançar ao próximo cartão
    cartaoAtual++;
    // Chama a função para mostrar o novo cartão atual
    mostrarCartao();
});

// Adiciona um ouvinte de evento de clique ao botão de voltar
btnVoltar.addEventListener("click", function () {
    // Verifica se o cartão atual é o primeiro cartão
    const ehPrimeiroCartao = cartaoAtual === 0;
    // Se for o primeiro cartão, sai da função para não voltar mais
    if (ehPrimeiroCartao) return;

    // Chama a função para esconder o cartão atualmente selecionado
    esconderCartaoSelecionado();
    // Decrementa a variável 'cartaoAtual' para voltar ao cartão anterior
    cartaoAtual--;
    // Chama a função para mostrar o novo cartão atual
    mostrarCartao();
});

// Função para mostrar o cartão atual
function mostrarCartao() {
    // Adiciona a classe "selecionado" ao cartão atual para torná-lo visível
    cartoes[cartaoAtual].classList.add("selecionado");
}

// Função para esconder o cartão atualmente selecionado
function esconderCartaoSelecionado() {
    // Seleciona o cartão que atualmente tem a classe "selecionado"
    const cartaoSelecionado = document.querySelector(".selecionado");
    // Remove a classe "selecionado" do cartão atual para escondê-lo
    cartaoSelecionado.classList.remove("selecionado");
}