 function imgSlide(img){
     document.querySelector('.nike').src = img
 }

 function circleColor(color){
     const circle = document.querySelector('.circulo');
     circle.style.background = color;

 }

 function textColor(text){
     const textColorido = document.querySelector('#color')
     textColorido.style.color = text
 }

 function fundoColor(fundo){
     const fundoColorido = document.querySelector('#fundo')
     fundoColorido.style.background = fundo;
 }
 function tituloColor(titulo){
     const tituloColorido = document.querySelector('#title-Color')
     tituloColorido.style.color = titulo
 }