// 1ºdefineProperty - 2ºdefineProperties ( é para fazer o 'Object.freeze();' em 1ºuma ou 2ºalguma e podes deixar as outras propriedades no seu funcionamento normal)

function Produto(nome, preco, estoque) {
//     this.nome = nome;//a propriedade 'nome' esta como publica, ela é lida fora da nossa função 'Produto()'

// this.preco = preco;


// this.estoque = estoque;

Object.defineProperty(this, 'estoque', {//apenas para uma propriedade
enumerable: true,//mostra a chave quando utilizamos o 'forIn', 
value: estoque,//valor da chave
writable: false, //alterar a propriedade recebe o valor 'false', ex. fora da nossa função não podemos escrever 'p1.estoque = 500000;' (pode o não alterar o valor)
configurable: false,//pode ou não apagar(configurar) a chave, se ela for configuravel vamos fazer novamente o 'Object.defineProperty()', valor 'true' tambem não permite apagar ex. delete p1.estoque;
// configurable: true,//pode ou não apagar(configurar) a chave, se ela for configuravel vamos fazer novamente o 'Object.defineProperty()'
});

// Object.defineProperty(this, 'estoque', {//apenas para uma propriedade
// enumerable: true,//mostra a chave quando utilizamos o 'forIn', Object.keys()
// value: estoque,//valor da chave
// writable: true, //alterar a propriedade recebe o valor 'false', ex. fora da nossa função não podemos escrever 'p1.estoque = 500000;' (pode o não alterar o valor)
// configurable: false//pode ou não apagar(configurar) a chave, se ela for configuravel vamos fazer novamente o 'Object.defineProperty()'
// });

Object.defineProperties(this, {
 nome: { 
enumerable: true,
value: nome,
writable: true, 
configurable: true
 },   
 preco: {
    enumerable: true,
    value: preco,
    writable: true, 
    configurable: false
 },   
});
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
delete p1.estoque;
console.log(p1);
console.log(Object.keys(p1));//retorna os nomes das chaves