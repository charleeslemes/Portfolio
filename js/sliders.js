$('.container-tec').slick({
    dots: true,
    arrows: false,
    speed:1000,
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 2000,
    pauseOnHover:false,
  
});



/* descrição autor */
ScrollReveal({ reset: true});

ScrollReveal().reveal('.conteudo-sobre .dev', { delay: 300});

ScrollReveal().reveal('.conteudo-sobre .title-autor', { delay: 500});
ScrollReveal().reveal('.conteudo-sobre .texto-autor ', { delay: 700});




function escritaAuto(elemento) {
    const textoArray = elemento.innerHTML.split('');
    textoArray.pop();
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
       setTimeout(() => elemento.innerHTML = elemento.innerHTML.replace("|", "") + letra +"|", 120 * i);
       if(textoArray.length-1 == i){
          setTimeout(() => escritaAuto(elemento), 75 * i + 5000);
       }
    });

    
    
 }
 
 const titulo = document.querySelector('.dev');
 escritaAuto(titulo);