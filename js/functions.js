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



     

  
  })


           




   

  
  

 
                  
        
    


       

  

      
       


   



