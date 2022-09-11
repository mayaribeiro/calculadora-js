/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let mostrador = document.getElementById("mostrador");
let operador = document.getElementById("operador");
let numeroAuxiliar = document.getElementById("numeroAuxiliar")
let b0 = document.getElementById("b0");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

let bs = document.getElementById("bs");
let bce = document.getElementById("bce");
let bm = document.getElementById("bm");
let bsub = document.getElementById("bsub");
let bp = document.getElementById("bp");
let bd = document.getElementById("bd");
let bi = document.getElementById("bi");

let bqua = document.getElementById("bqua");
let bpo = document.getElementById("bpo");
let br = document.getElementById("br");
let historico = document.getElementById("historico")

bce.addEventListener("click", function () {
    mostrador.value = 0;
    numeroAuxiliar.value = 0;
    operador.value = "";
});

function igualdade() {
    let aux = mostrador.value;
    if (operador.value === "-") {
        mostrador.value = numeroAuxiliar.value - mostrador.value;
    }
    if (operador.value === "+") {
        mostrador.value = parseFloat(numeroAuxiliar.value) + parseFloat(mostrador.value);
    }
    if (operador.value === "/") {
        mostrador.value = numeroAuxiliar.value / mostrador.value;
    }
    if (operador.value === "x") {
        mostrador.value = numeroAuxiliar.value * mostrador.value;
    }
    if (operador.value === "x²") {
        mostrador.value = numeroAuxiliar.value * numeroAuxiliar.value;
    }
    if (operador.value === "√") {
        mostrador.value = Math.sqrt(mostrador.value);
    }
    if (operador.value === "xʸ") {
        mostrador.value = Math.pow(numeroAuxiliar.value, mostrador.value);
    }

    historico.textContent += numeroAuxiliar.value + operador.value + aux + "=" + mostrador.value + "\n"
    operador.value = "";
    numeroAuxiliar.value = 0;
}

function digito(valor) {
    if (mostrador.value !== "0") {
        mostrador.value = mostrador.value + valor;
    }
    else {
        mostrador.value = valor;
    }
}

function operacao(valor) {
    if (operador.value !== "") {
        operador.value = valor;
    }
    else {
        operador.value = valor;
        numeroAuxiliar.value = mostrador.value;
        mostrador.value = 0;
    }
}

function ponto() {
    if (mostrador.value.indexOf(".") === -1) {
        mostrador.value += ".";
    }
}

b0.addEventListener("click", function () { digito(this.value); });
b1.addEventListener("click", function () { digito(this.value); });
b2.addEventListener("click", function () { digito(this.value); });
b3.addEventListener("click", function () { digito(this.value); });
b4.addEventListener("click", function () { digito(this.value); });
b5.addEventListener("click", function () { digito(this.value); });
b6.addEventListener("click", function () { digito(this.value); });
b7.addEventListener("click", function () { digito(this.value); });
b8.addEventListener("click", function () { digito(this.value); });
b9.addEventListener("click", function () { digito(this.value); });
bp.addEventListener("click", ponto);
bs.addEventListener("click", function () { operacao(this.value); });
bsub.addEventListener("click", function () { operacao(this.value); });
bm.addEventListener("click", function () { operacao(this.value); });
bd.addEventListener("click", function () { operacao(this.value); });
bi.addEventListener("click", igualdade);
bqua.addEventListener("click", function () { operacao(this.value); });
bpo.addEventListener("click", function () { operacao(this.value); });
br.addEventListener("click", function () { operacao(this.value); });