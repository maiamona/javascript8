// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'original: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){

 return this.nome + ' ' + this.sobrenome;
} 


// Pessoa.prototype.estouAqui = 'Hahahaha';

// instancia, instanciar o objeto
const pessoa1 = new Pessoa('Luiz', 'O.');//<- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.');
const data = new Date();

// como o javascript faz a procura:
// * data;--> Date.prototype;-->Object.prototype;
// * Pessoa1; --> Pessoa.prototype;-->Object.prototype;

// Pessoa.prototype === pessoa1.__proto__

console.log(pessoa1);
console.log(pessoa2);
console.log(data);
