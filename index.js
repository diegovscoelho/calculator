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
let num1 = "";
let op = "";
let num2 = "";

const display_personalizado = (num1, num2, op) => {
    display.innerText = num1 + op + num2;
}

botoes.forEach(botao => {
    botao.addEventListener("click", (event) => {
        if(event.target.classList.contains("digit")){
            if(op === "") {
                num1 += event.target.innerText;
                display_personalizado(num1, num2, op);
            } else {
                num2 += event.target.innerText;
                display_personalizado(num1, num2, op);
            }
        } else if(event.target.classList.contains("operation")){
            op = event.target.innerText;
            display_personalizado(num1, num2, op);
        }
    });
});
