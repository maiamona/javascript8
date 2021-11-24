// defineProperty => 1ºGetter e 2ºSetters, 1º para obter valor e 2º para settar valor ou configurar o valor 

function Produto(nome, preco, estoque) {
        this.nome = nome;
    
    this.preco = preco;
    let estoquePrivado;
    Object.defineProperty(this, 'estoque', {// variavel privada que apenas pode ser alterada dentro do nosso escopo
    enumerable: true,
    // value: estoque, não vou presisar do 'value' quando trabalhamos com Getter e Setter
    // writable: true,^tambem não vamos presisar do 'writable'
    configurable: true,
    get: function () {//Getter
        // return estoque;
        return estoquePrivado;
    },
    set: function (valor) {//Setter
      if (typeof valor !== 'number') {
        throw new TypeError('Mensagem');
        // return;
      }
        // console.log(valor); 
        estoquePrivado = valor;
    }
    });
    
    }
    
    const p1 = new Produto('Camiseta', 20, 3);
   
    console.log(p1);
    p1.estoque = 12345;
    console.log(p1.estoque);
    

    // tem que retornar um objeto para ser uma função fectory
    function criaProduto(nome) {
        return{
get nome(){
    return nome;
},
set nome(valor){
    valor = valor.replace('coisa', '');
    nome = valor;
}
        };
    }

    const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
    console.log(p2);
    console.log(p2.nome);