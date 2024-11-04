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
    if(op === '+') {
        num1 = add(num1, num2); 
        display.innerText = num1;
    } else if(op === '-') {
        num1 = sub(num1, num2); 
        display.innerText = num1;
    } else if(op === '*') {
        num1 = mult(num1, num2); 
        display.innerText = num1;
    } else if(op === '/') {
        num1 = div(num1, num2); 
        display.innerText = num1;
    } else {
        display.innerText = "Digite uma operação válida!";
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
                num1 = parseInt(num1, 10);
                display_personalizado(num1, num2, op);
            } else {
                num2 += event.target.innerText;
                num2 = parseInt(num2, 10);
                display_personalizado(num1, num2, op);
            }
        } else if(event.target.classList.contains("operation") && num1 !== ""){
            op = event.target.innerText;
            display_personalizado(num1, num2, op);
        } else if(event.target.classList.contains("result") && num2 !== "") {
            operate();
            num2 = "";
        } else if(event.target.classList.contains("clear")) {
            num1 = "";
            num2 = "";
            op = "";
            display.innerText = "";
        }
    });
});
