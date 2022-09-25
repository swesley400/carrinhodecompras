var carSome = document.querySelector('.campo-do-carrinho')

carSome.style.display= "none"
let visibility = false

function someCar(){
    visibility = !visibility 
    console.log(visibility)
    visibility ? carSome.style.display= "block" : carSome.style.display= "none"

} 


    
     
  

   

