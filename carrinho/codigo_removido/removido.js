function montaCar(){

    var esp=document.createElement("span");
    var espbr=document.createElement("br");
    document.getElementById("carrinho-itens").appendChild(esp);
    document.getElementById("carrinho-itens").appendChild(espbr)
    esp.innerHTML= produtoJson[i].name + " " + produtoJson[i].price;
        
    
    
    
    } 
    montaCar()  