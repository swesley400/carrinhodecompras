
let name_produto1 = document.querySelector('#nome_produto1');
let descricao1 = document.querySelector('#descricao1');
let img_produto1 = document.querySelector('#img_produto1');
let precoDoItem1 = document.querySelector('#preco_produto1');
let name_produto2 = document.querySelector('#nome_produto2');
let descricao12 = document.querySelector('#descricao2');
let img_produto2 = document.querySelector('#img_produto2');
let precoDoItem2 = document.querySelector('#preco_produto2');
let adicionaDescricao = document.querySelector('.carrinho-itens')
let  tamanho = document.querySelector('#tamanho1')
let tamanhoInserido = document.querySelector('#tamanhoInserido')
let tamanhoInserido2 = document.querySelector('#tamanhoInserido2')
let campoCar = document.querySelector('.carrinho-itens')

campoCar.innerHTML = localStorage.getItem('Car')

function adicionaHtml(){
    name_produto1.innerHTML = produtoJson[0].name;
    descricao1.innerHTML = produtoJson[0].description; 
    img_produto1.innerHTML = img_produto1.src = produtoJson[0].img
    precoDoItem1.innerHTML =`R$${produtoJson[0].price}, 00`
    tamanhoInserido.innerHTML = produtoJson[0].tamanho.map( item => `<option value"${item}">${item}</option>`)
    tamanhoInserido2.innerHTML = produtoJson[1].tamanho.map( item => `<option value"${item}">${item}</option>`)
    name_produto2.innerHTML = produtoJson[1].name;
    descricao12.innerHTML = produtoJson[1].description; 
    img_produto2.innerHTML = img_produto2.src = produtoJson[1].img
    precoDoItem2.innerHTML = `R$${produtoJson[1].price}, 00`  
   
}
adicionaHtml()

var adicionaCarrinho= document.querySelectorAll('.addCart')    

for(let i = 0; i < adicionaCarrinho.length; i++){
    adicionaCarrinho[i].addEventListener('click',()=>{
        numeroDoCarinho(produtoJson[i])
        /*console.log(produtoJson[i])*/
        /*Cria Elemento e insere Json no carrinho*/ 
        const produtoInsere = new MontaCar(produtoJson[i].name, produtoJson[i].price,produtoJson[i].tamanho, null)
        produtoInsere.insereNoCar()
      
    })
}

function MontaCar(descricao, preco, tamanho, value2){
    this.descricao = descricao;
    this.preco = preco;
    this.teste = [''];
    this.tamanho = tamanho;
    this.insereNoCar = function(){
        this.initial = `<div class="conteudo-car">${this.descricao}`+`<span class="preco-car">R$ ${this.preco},00</span></div>`
        localStorage.getItem('Car') == null ? this.carragaDoStorange = this.initial : this.carragaDoStorange = localStorage.getItem('Car') + this.initial
        localStorage.setItem('Car', this.carragaDoStorange )
        campoCar.innerHTML = localStorage.getItem('Car')
    }

}

function carregaNumeroDoCar(){
    let total = localStorage.getItem('Total')
    let numeroProdutos = localStorage.getItem('NumerodoCarrinho')
    if (numeroProdutos){
        document.querySelector('.qtd-item').textContent = numeroProdutos
    }
    
    if(total){
        document.querySelector('.valor-total').textContent = total
    }
    
}

function numeroDoCarinho(produtoJson){
    total = document.querySelector('.valor-total');
    function extraiValor (num1, num2) {
        resultado = Number(num1) + Number(num2)
        return resultado
    }
    extraiValor(total.textContent, produtoJson.price)
    total.innerHTML = resultado
    
    let itensCarNumeros = localStorage.getItem('NumerodoCarrinho')
    let numeroProdutos = localStorage.getItem('NumerodoCarrinho')
    numeroProdutos = parseInt(numeroProdutos)
    itensCarNumeros = parseInt(total.textContent)
    
    if(numeroProdutos){
        localStorage.setItem('Total', itensCarNumeros )
        localStorage.setItem('NumerodoCarrinho', numeroProdutos + 1)
        document.querySelector('.qtd-item').textContent = numeroProdutos + 1
        document.querySelector('.valor-total').textContent = itensCarNumeros
    }
    else{
        localStorage.setItem('Total', itensCarNumeros)
        localStorage.setItem('NumerodoCarrinho', 1)
        document.querySelector('.qtd-item').textContent = 1
        document.querySelector('.valor-total').textContent = itensCarNumeros
    }
    
    
}
carregaNumeroDoCar()

