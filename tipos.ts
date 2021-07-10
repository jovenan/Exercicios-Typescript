//Todos os tipos devem ser inseridos iniciando com letras minusculas.

// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Jonatas Venancio'

// Array
//É necessario colocar o tipo dos itens do array, seguido pelos colchetes.
const idades: number[] = [23, 45, 28]
//Outra forma de se definir um tipo de array.
const idades2: Array<number> = [23, 45, 28]

//Tuple
//Defino cada uma das posições e seu conteudo.
//posso mesclar cada item da tupla um tipo diferente de dado.
let jogadores: [string, string, string];
jogadores = ['Jonatas', 'Fulano', 'Ciclano']

//Enum
//Defino alguns valores e posso utilizar eles como se fosse um objeto.
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacaoo: StatusAprovacao = StatusAprovacao.Aprovado

//Any 
//É falar quando não sabemos o tipo do conteudo.
//Deve ser usado com cautela
const retornoDaAPI: any[] = [123,'Jonatas', false];
const retornoDaAPI2: any = {/* ... */};

//Void
//Usado em funções quando ela não retorna nada.
function printarNaTela(msg: string): void {
    console.log(msg)
}

//Null e Undefined
//Usamos quando a variavel vai ser Null ou Undefined.
const u: undefined = undefined;
const n: null = null;

//Object
function criar(objeto: object) {
    // ...
}
criar({
    propriedade: 1,
})

//Never
//Coisas que nunca ocorrem.
//nessa função ela nunca ocorre.
function loopInfinito(): never {
    while(true) {
        //...
    }
}
function erro(mensagem: string): never {
    throw new Error(mensagem);
}
function falha():never {
    return erro('Algo falhou');
}

//Union Types
//Pode ter um tipo OU outro tipo.
//Utiliza o um tipo e coloca o, OU = "|" e o outro tipo
const nota: string | number = 5;
//Podemos usar em funções tambem:
function exibirNota(nota: number | string) {
    console.log("A nota é " + nota)
}
exibirNota('10');
exibirNota(10);

//Alias
//Alias é a criação de um type personalizados
type Funcionarios = Array<string>;
let funcionarios: Funcionarios = ['Jonatas','Fulano','Ciclano'];
function tratarFuncionarios(funcionarios: Funcionarios) {
    for (let funcionario of funcionarios) {
        console.log(`Nome do funcionario: ${funcionario}`)
    }
}

//Valores nulos ou opcionais
let altura:number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; //Quando coloco a interrogação no nome do atributo, eu digo que ele é opcional.
}
const contato: Contato = {
    nome: 'Jonatas',
    telefone1: '131231',
}

//Type Assertion
//Se eu for utilizar uma função de um determinado tipo, porem eu coloquei o tipo como 'any',
//Eu posso utilizar o 'as' mais o tipo que eu quero que o valor passe a ser.
const minhaIdade: any = 23;
(minhaIdade as number).toString();
//Neste exemplo explicitamos qual é o tipo do elemento que ele vai receber, 
//Nesse caso sabemos que o elemento é um input, então explicitamos isso.
let input = document.getElementById('numero1') as HTMLInputElement;
//Outra forma de atribuir um tipo.
input = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value);

