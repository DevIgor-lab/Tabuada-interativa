# 📘 Documentação Técnica — Gerador de Tabuada Interativo

## 1. Visão geral

O projeto é uma aplicação front-end simples (HTML + CSS + JavaScript puro, sem frameworks ou bibliotecas externas) que recebe um número entre 1 e 10 e exibe a tabuada de multiplicação completa (1x até 10x) desse número.

O foco pedagógico do projeto é a **estrutura de repetição `for`**, usada para calcular e renderizar cada linha da tabuada dinamicamente no DOM.

## 2. Estrutura de arquivos

```
├── index.html   # Marcação da página: formulário e área de resultado
├── style.css    # Estilos visuais (variáveis, layout, responsividade)
└── script.js    # Lógica de validação, cálculo e renderização
```

## 3. `index.html`

### 3.1 Elementos principais

| Elemento | ID/Classe | Função |
|---|---|---|
| `<form>` | `#form-tabuada` | Captura o envio do número digitado |
| `<input type="number">` | `#numero` | Campo onde o usuário digita o valor (1–10) |
| `<button type="submit">` | — | Dispara a geração da tabuada |
| `<p>` | `#mensagem-erro` | Exibe mensagens de validação (`hidden` por padrão) |
| `<section>` | `#resultado` | Recebe o título e as linhas da tabuada geradas via JS |

### 3.2 Observações

- O atributo `aria-live="polite"` em `#resultado` garante que leitores de tela anunciem o novo conteúdo automaticamente após a geração da tabuada, melhorando a acessibilidade.
- O `<input>` já possui os atributos nativos `min="1"`, `max="10"` e `required`, que servem como primeira camada de validação do navegador — a validação real, porém, é reforçada em JavaScript (ver seção 5.2).

## 4. `style.css`

### 4.1 Variáveis (`:root`)

| Variável | Uso |
|---|---|
| `--azul-escuro` | Cor do texto principal e título |
| `--azul-medio` | Cor do botão e dos números de resultado |
| `--azul-claro` | Cor de destaque (eyebrow, foco do input) |
| `--cinza-fundo` / `--cinza-texto` | Fundo da página e texto secundário |
| `--vermelho-erro` | Cor da mensagem de erro |
| `--raio` | Border-radius padrão usado em card, input e botão |

### 4.2 Layout

- O `body` usa `flexbox` para centralizar o `.card` vertical e horizontalmente na tela.
- O `.card` tem largura máxima de `520px`, com sombra e cantos arredondados, criando o efeito de painel central.
- `.input-row` organiza o campo numérico e o botão lado a lado com `flex`.
- Cada linha da tabuada (`.linha-tabuada`) usa `justify-content: space-between` para alinhar a operação (`num x mult`) à esquerda e o resultado à direita.

## 5. `script.js`

### 5.1 Seleção de elementos

```js
const form = document.getElementById("form-tabuada");
const inputNumero = document.getElementById("numero");
const mensagemErro = document.getElementById("mensagem-erro");
const resultado = document.getElementById("resultado");
```

Referências diretas ao DOM, obtidas uma única vez ao carregar o script.

### 5.2 Evento `submit`

```js
form.addEventListener("submit", function (evento) { ... });
```

Fluxo de execução:

1. `evento.preventDefault()` impede o recarregamento padrão da página.
2. O valor do input é convertido para número com `Number(inputNumero.value)`.
3. **Validação:** o número precisa ser inteiro (`Number.isInteger`) e estar entre 1 e 10.
   - Se inválido → exibe `#mensagem-erro`, limpa `#resultado` e encerra a função (`return`).
   - Se válido → esconde a mensagem de erro e chama `gerarTabuada(numero)`.

### 5.3 Função `gerarTabuada(numero)`

Responsável por calcular e renderizar a tabuada.

```js
function gerarTabuada(numero) {
  resultado.innerHTML = ""; // limpa resultado anterior

  // cria o título "Tabuada do X"

  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const total = numero * multiplicador;
    // cria e insere uma <div class="linha-tabuada"> no DOM
  }
}
```

**Detalhamento do laço `for`:**

| Componente | Valor |
|---|---|
| Inicialização | `multiplicador = 1` |
| Condição de parada | `multiplicador <= 10` |
| Incremento | `multiplicador++` |
| Corpo do laço | Calcula `numero * multiplicador` e insere uma linha no DOM |

A cada iteração, é criado um elemento `<div class="linha-tabuada">` contendo dois `<span>`: a operação (`numero x multiplicador`) e o resultado (`total`), inserido em `#resultado` via `appendChild`.

## 6. Regras de validação

| Regra | Comportamento se violada |
|---|---|
| Deve ser um número inteiro | Mensagem de erro exibida |
| Deve ser ≥ 1 | Mensagem de erro exibida |
| Deve ser ≤ 10 | Mensagem de erro exibida |
| Campo vazio | `Number("")` retorna `0`, cai na regra de valor mínimo |

## 7. Possíveis extensões futuras

- Permitir escolher o intervalo da tabuada (ex.: de 1 até 20).
- Adicionar opção de tabuada decrescente.
- Salvar o último número consultado em `localStorage`.
- Adicionar testes automatizados para a função `gerarTabuada`.

## 8. Compatibilidade

Projeto utiliza apenas recursos nativos de HTML5, CSS3 e JavaScript ES6+ (const/let, arrow functions não usadas, mas `Number.isInteger` e template literals sim), compatível com todos os navegadores modernos.
