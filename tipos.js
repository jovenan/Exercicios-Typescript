"use strict";
//Todos os tipos devem ser inseridos iniciando com letras minusculas.
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'Jonatas Venancio';
// Array
//É necessario colocar o tipo dos itens do array, seguido pelos colchetes.
var idades = [23, 45, 28];
//Outra forma de se definir um tipo de array.
var idades2 = [23, 45, 28];
//Tuple
//Defino cada uma das posições e seu conteudo.
//posso mesclar cada item da tupla um tipo diferente de dado.
var jogadores;
jogadores = ['Jonatas', 'Fulano', 'Ciclano'];
//Enum
//Defino alguns valores e posso utilizar eles como se fosse um objeto.
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacaoo = StatusAprovacao.Aprovado;
//Any 
//É falar quando não sabemos o tipo do conteudo.
//Deve ser usado com cautela
var retornoDaAPI = [123, 'Jonatas', false];
var retornoDaAPI2 = { /* ... */};
//Void
//Usado em funções quando ela não retorna nada.
function printarNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
//Usamos quando a variavel vai ser Null ou Undefined.
var u = undefined;
var n = null;
//Object
function criar(objeto) {
    // ...
}
criar({
    propriedade: 1,
});
//Never
//Coisas que nunca ocorrem.
//nessa função ela nunca ocorre.
function loopInfinito() {
    while (true) {
        //...
    }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
//Union Types
//Pode ter um tipo OU outro tipo.
//Utiliza o um tipo e coloca o, OU = "|" e o outro tipo
var nota = 5;
//Podemos usar em funções tambem:
function exibirNota(nota) {
    console.log("A nota é " + nota);
}
exibirNota('10');
exibirNota(10);
var funcionarios = ['Jonatas', 'Fulano', 'Ciclano'];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcionario: " + funcionario);
    }
}
//Valores nulos ou opcionais
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Jonatas',
    telefone1: '131231',
};
//Type Assertion
//Se eu for utilizar uma função de um determinado tipo, porem eu coloquei o tipo como 'any',
//Eu posso utilizar o 'as' mais o tipo que eu quero que o valor passe a ser.
var minhaIdade = 23;
minhaIdade.toString();
//Neste exemplo explicitamos qual é o tipo do elemento que ele vai receber, 
//Nesse caso sabemos que o elemento é um input, então explicitamos isso.
var input = document.getElementById('numero1');
//Outra forma de atribuir um tipo.
input = document.getElementById('numero1');
console.log(input.value);
