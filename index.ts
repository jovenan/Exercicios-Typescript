//Como o TS é tipado, ele necessita que eu coloque o tipo do parametro na função.
function somar(num1: number,num2: number) {
    return num1 + num2;
}

const numero1 = 10;
const numero2 = 7;

const resultado = somar(numero1,numero2)
console.log(resultado)

