function slide1(){
    document.querySelector('.img_banner').src = "./imgs/slide1.png"
    setTimeout("slide2()", 2000)
}
function slide2(){
    document.querySelector('.img_banner').src = "./imgs/slide2.jpg"
    setTimeout("slide3()", 2000)
}
function slide3(){
    document.querySelector('.img_banner').src = "./imgs/slide3.jpg"
    setTimeout("slide1()", 2000)
}