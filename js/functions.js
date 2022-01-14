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


  
  /*usando vanilla */


    var btnRight = document.querySelector('section.projetos .arrow-right');
    var imgsSlider = document.querySelectorAll('section.projetos .projetos-single');
   
    
    var btnLeftVoltar = 0;



    var lastIndex=0;

    imgsSlider.forEach((itens,index)=>{
   
    document.querySelectorAll('section.projetos .bullet-single')[index]
    .addEventListener('click',()=>{
       
           
           
                var lastImage  = document.querySelectorAll('section.projetos .projetos-single')[lastIndex];
                var actualImage = document.querySelectorAll('section.projetos .projetos-single')[index];


                document.querySelectorAll('.bullet-single')[lastIndex]
                .classList.remove('active-bullet');
        
        
                ;
                document.querySelectorAll('.bullet-single')[index]
                .classList.add('active-bullet');


                lastImage.style.opacity =0;
                actualImage.style.opacity = 1;
        
                lastIndex = index;

         
                
            })
          
        
        })

  
  

 
                  
        
    


       

  

      
       


   



