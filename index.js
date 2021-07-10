"use strict";
//Como o TS é tipado, ele necessita que eu coloque o tipo do parametro na função.
function somar(num1, num2) {
    return num1 + num2;
}
var numero1 = 10;
var numero2 = 7;
var resultado = somar(numero1, numero2);
console.log(resultado);
