// new Object -> Object.prototype

const objA = {
    chaveA: 'A',
    // __proto__: Object.prototype // quando criamos um objeto este campo é preenchido por detrais do codigo
};

// objA.__proto__ === Object.prototype //return true

const objB = {
    chaveB: 'B',
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';


Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveA);

// Object.getPrototypeOf(objA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {// criar função dentro prtotype de Produto ou seja fora da nossa função construtora
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) {// criar função dentro prtotype de Produto ou seja fora da nossa função construtora
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50);
// p1.desconto(100);//em percentagem
// p1.aumento(100);//em percentagem

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

// const p3 = Object.create(Object.prototype);//return objeto vazio
// const p3 = Object.create(Produto.prototype);
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,//criando as configurações
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

// p3.preco = 113;
p3.aumento(10);

console.log(p1);
console.log(p2);

console.log(p3);

