const produto = {nome: 'Caneca', preco: 1.8};

const outraCoisa = {
     ...produto,
     material: 'porcelana'
    };

    const caneca = Object.assign({}, produto, {material: 'prata'});
    const caneca2 = {nome: produto.nome, preco: produto.preco};

outraCoisa.nome = 'mona';

// Object.freeze(produto);// não podemos alterar nada do nosso objeto 'produto' ex. produto.nome = 'outro nome'
console.log(produto);
console.log(outraCoisa);
console.log(caneca);
console.log(caneca2);
// console.log(Object.keys(produto));//retorna um array com o nome das chaves do objeto

Object.defineProperty(produto, 'nome', {
    writable: false,
    // value: 'outra coisa',
    configurable: false  
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);
console.log(Object.keys(produto));//retorna as chaves do objeto
console.log(Object.values(produto));//retorna os valores das chaves do objeto
console.log(Object.entries(produto));//retorna as chaves e os valores das suas respectivas chaves do objecto dentro de um array ex. [ [ 'nome', 'Caneca' ], [ 'preco', 1.8 ] ]


// for (const iterator of Object.entries(produto)) {
//     console.log(iterator);
// }

console.log("const produto = {");
for (let [chave, valor] of Object.entries(produto)) {
     if (typeof valor === "string") {
        valor = `'${valor}'`;
 } else if(typeof valor === "number") {
    valor = valor;
}
    console.log(`${chave}: ${valor}`);
}
console.log("}");