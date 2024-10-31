function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function div(n1, n2) {
    return n1 / n2;
}

function mult(n1, n2) {
    return n1 * n2;
}

function operate() {
    if(op === "+") {
        return console.log(add(num1, num2));
    } else if(op === "-") {
        return console.log(sub(num1, num2));
    } else if(op === "/") {
        return console.log(div(num1, num2));
    } else if(op === "*") {
        return console.log(mult(num1, num2));
    } else{
        return console.log("Digite uma operação válida");
    }
}

const botoes = document.querySelectorAll("button"); // Seleciona todos os botões
const display = document.querySelector("#display");
let displayText = "";
let num1;
botoes.forEach(botao => {
    botao.addEventListener("click", (event) => {
        displayText += event.target.innerText; // Pega o texto dentro do botão clicado
        display.innerText = displayText;
    });
});
