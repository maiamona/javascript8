// 1ºFactory functions / 2ºConstructor functions / 3ºClasses

const pessoa = {//utilizando objeto literal
    nome: 'mona',
    sobrenome: 'garcia'
};
const chave = 'nome';

const pessoas20 = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

console.log(pessoa.nome);
// console.log(pessoa.chave); erro
console.log(pessoa['nome']);
console.log(pessoa[chave]);

const pessoa1 = new Object();//utilizando objeto construtor
pessoa1.nome = 'Lucinda';
pessoa1.sobrenome = 'Mayso';
pessoa1.idade = 34;

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
// delete pessoa1.nome;

pessoa1.falarNome = function () {
   return `${this.nome} esta falando seu nome.`;
};

pessoa1.getDataNascimento = function () {
 const dataAtual = new Date();//construtor da data
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

// for (let chave in pessoas20) { isto é um array
//     console.log(pessoas20[chave]);
// }


for (let chave in pessoa1) {// isto é um objeto
    console.log(chave);
}

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

//  console.log(pessoa1['nome']);
//  console.log(pessoa1.nome);

// console.log("const pessoa1 = {");
// for (var [key, value] of Object.entries(pessoa1)) {
//  valor = typeof value === "string" ? `'${value}'` : value;
//  if (typeof value === "string") {
//      value = `'${value}'`;
//  } else if(typeof value === "number") {
//     value = value;
// }
    
//  console.log(key + ': ' + value);   
// }
// console.log("}");

/*
for (const p of pessoas20) {//'forof' apenas funciona com arrays
    console.log(p.nome.length);
}
*/

function criaPessoa(nome, sobrenome) {// 1º
    return {
        nome,
         sobrenome,
         get nomeCompleto(){
           return `${this.nome} ${this.sobrenome}`; 
         }
    };
}

function criaPessoa2(nome, sobrenome) {// 1º
    return {
        nome,
         sobrenome,
         nomeCompleto(){
           return `${this.nome} ${this.sobrenome}`; 
         }
    };
}

const p1 = criaPessoa('Emanuel', 'Gimene');
const p2 = criaPessoa2('Jose', 'Luvuvamo');

console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto());

function Pessoa(nome, sobrenome) {// 2º
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function () {
        return `${this.nome} ${this.sobrenome}`;   
    }
    Object.freeze(this);//nenhum valor que leva 'this' na nossa função podera ser alterada ex. fora da nossa função não sera permitida fazer: 'p4.nomeDele(){return 'oi}', também funciona com arrays
}

const p4 = new Pessoa('Miguel', 'Dimonekene');

Object.freeze(p4); //para não alterar nenhum valor do objeto 'p1' ex. 'p4.nome = "Outra coisa";'
p4.nome = 'Outra coisa';
console.log(p4.nomeCompleto());