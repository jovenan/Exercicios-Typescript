//Interfaces são muito parecidas cmo types Alias.
//É recomendado que se possivel utilize as Interfaces em vez de criar types.
interface Usuario {
    nome: string;
    email: string;
    endereco?: string;
}

function getUser() {
    return {
        nome:'jonatas',
        email:'jonatas.venancio@outlook.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}

