# 🔢 Gerador de Tabuada Interativo

Aplicação web simples que gera a tabuada de multiplicação (de 1 a 10) de um número escolhido pelo usuário, utilizando **HTML**, **CSS** e **JavaScript puro**.

Projeto criado como exercício prático de **estrutura de repetição `for`** em JavaScript.

## 🚀 Funcionalidades

- Campo de entrada para digitar um número entre 1 e 10
- Validação do valor informado (número inteiro dentro do intervalo permitido)
- Exibição de mensagem de erro quando o valor é inválido
- Geração dinâmica da tabuada completa (1x até 10x) usando um laço `for`
- Interface responsiva e estilizada, com feedback visual no campo de foco

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura da página
- **CSS3** — estilização (variáveis CSS, flexbox, gradiente)
- **JavaScript (ES6+)** — lógica de validação e geração da tabuada via DOM

## 📁 Estrutura do projeto

```
├── index.html   # Estrutura da página e formulário
├── style.css    # Estilos visuais do card, formulário e resultado
└── script.js    # Lógica de validação e geração da tabuada
```

## ▶️ Como executar

1. Baixe ou clone os arquivos do projeto.
2. Abra o arquivo `index.html` diretamente no navegador.

Não é necessário nenhum servidor ou instalação — é um projeto 100% front-end.

## 💡 Como funciona

Ao enviar o formulário, o JavaScript:

1. Captura o valor digitado e valida se é um número inteiro entre 1 e 10.
2. Caso inválido, exibe uma mensagem de erro e interrompe a execução.
3. Caso válido, percorre os multiplicadores de 1 a 10 com um laço `for`, calculando o resultado de cada multiplicação.
4. Insere dinamicamente cada linha do resultado no DOM, dentro da seção `#resultado`.

```js
for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
  const total = numero * multiplicador;
  // ...cria e insere a linha na página
}
```

## 📄 Licença

Projeto de uso livre para fins de estudo.
