// Seleciona os elementos da página que vamos usar
const form = document.getElementById("form-tabuada");
const inputNumero = document.getElementById("numero");
const mensagemErro = document.getElementById("mensagem-erro");
const resultado = document.getElementById("resultado");

// Escuta o envio do formulário
form.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede o recarregamento da página

  const numero = Number(inputNumero.value);

  // Validação: o número precisa estar entre 1 e 10
  if (!Number.isInteger(numero) || numero < 1 || numero > 10) {
    mensagemErro.textContent = "Por favor, digite um número inteiro entre 1 e 10.";
    mensagemErro.hidden = false;
    resultado.innerHTML = "";
    return;
  }

  mensagemErro.hidden = true;
  gerarTabuada(numero);
});

// Função responsável por calcular e exibir a tabuada usando um laço "for"
function gerarTabuada(numero) {
  // Limpa o resultado anterior antes de gerar um novo
  resultado.innerHTML = "";

  const titulo = document.createElement("h2");
  titulo.textContent = `Tabuada do ${numero}`;
  resultado.appendChild(titulo);

  // Estrutura de repetição "for": percorre de 1 até 10
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const total = numero * multiplicador;

    // Cria uma linha na página para cada multiplicação
    const linha = document.createElement("div");
    linha.className = "linha-tabuada";
    linha.innerHTML = `
      <span>${numero} x ${multiplicador}</span>
      <span class="resultado-num">${total}</span>
    `;

    // Insere a linha dinamicamente no DOM
    resultado.appendChild(linha);
  }
}
