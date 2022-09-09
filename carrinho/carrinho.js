
let name_produto1 = document.querySelector('#nome_produto1');
let descricao1 = document.querySelector('#descricao1');
let img_produto1 = document.querySelector('#img_produto1');
let precoDoItem1 = document.querySelector('#preco_produto1');
let name_produto2 = document.querySelector('#nome_produto2');
let descricao12 = document.querySelector('#descricao2');
let img_produto2 = document.querySelector('#img_produto2');
let precoDoItem2 = document.querySelector('#preco_produto2');
let adicionaDescricao = document.querySelector('.carrinho-itens')

function adicionaHtml(){
    name_produto1.innerHTML = produtoJson[0].name;
    descricao1.innerHTML = produtoJson[0].description; 
    img_produto1.innerHTML = img_produto1.src = produtoJson[0].img
    precoDoItem1.innerHTML = produtoJson[0].price   
    name_produto2.innerHTML = produtoJson[1].name;
    descricao12.innerHTML = produtoJson[1].description; 
    img_produto2.innerHTML = img_produto2.src = produtoJson[1].img
    precoDoItem2.innerHTML = produtoJson[1].price  
}
adicionaHtml()


var adicionaCarrinho= document.querySelectorAll('.addCart')    

for(let i = 0; i < adicionaCarrinho.length; i++){
    adicionaCarrinho[i].addEventListener('click',()=>{
        numeroDoCarinho(produtoJson[i])
        /*console.log(produtoJson[i])*/
        /*Cria Elemento e insere Json no carrinho*/ 
         
        function MontaCar(descricao, preco, value, value2){

            this.descricao = descricao;
            this.preco = preco;
            this.teste = function(){
                this.initial = {item: this.descricao, preco: this.preco}
                console.log("Carrinho esta aqui", this.initial)
            }

        }
        const produtoInsere = new MontaCar(produtoJson[i].name, produtoJson[i].price, null, null)
        produtoInsere.teste()
        
        
          
        
        
        
      
    })
}

function carregaNumeroDoCar(){
    let total = localStorage.getItem('Total')
    let numeroProdutos = localStorage.getItem('NumerodoCarrinho')
    if (numeroProdutos){
        document.querySelector('.qtd-item').textContent = numeroProdutos
    }
    
    if(total){
        document.querySelector('.compara').textContent = total
    }
}

function numeroDoCarinho(produtoJson){
    total = document.querySelector('.compara');
    function extraiValor (num1, num2) {
        resultado = Number(num1) + Number(num2)
        return resultado
    }
    console.log(extraiValor(total.textContent, produtoJson.price))
    total.innerHTML = resultado
    
    let test = localStorage.getItem('NumerodoCarrinho')
    let numeroProdutos = localStorage.getItem('NumerodoCarrinho')
    numeroProdutos = parseInt(numeroProdutos)
    test = parseInt(total.textContent)
    
    if(numeroProdutos){
        
        localStorage.setItem('Total', test )
        localStorage.setItem('NumerodoCarrinho', numeroProdutos + 1)
        document.querySelector('.qtd-item').textContent = numeroProdutos + 1
        document.querySelector('.compara').textContent = test
    }
    else{
        localStorage.setItem('Total', test)
        localStorage.setItem('NumerodoCarrinho', 1)
        document.querySelector('.qtd-item').textContent = 1
        document.querySelector('.compara').textContent = test
        
    }
    
    
}

carregaNumeroDoCar()
        



       



       
 
 











