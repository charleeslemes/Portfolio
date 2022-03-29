/*usando jquery*/

$(function(){
    const  botaoMenuMobile = $('nav.menu-mobile');
      menuMobile();
  
     function menuMobile (){
      botaoMenuMobile.click(function(){
          let mostrarMenu = $('nav.menu-mobile ul');
          mostrarMenu.slideToggle();
      })
     }


     



    function escritaAuto(elemento) {
    const textoArray = elemento.innerHTML.split('');
    textoArray.pop();
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML = elemento.innerHTML.replace("", "") + letra +"", 120 * i);
        if(textoArray.length-1 == i){
            setTimeout(() => escritaAuto(elemento), 75 * i + 999999999);
        }
    });

    
    
    }
    
    const titulo = document.querySelector('.dev');
    escritaAuto(titulo);


  
  })


           




   

  
  

 
                  
        
    


       

  

      
       


   



