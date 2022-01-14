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
  


    var btnRight = document.querySelector('section.projetos .arrow-right');
    var btnLeft = document.querySelector('section.projetos .arrow-left');
    var imgsSlider = document.querySelectorAll('section.projetos .projetos-single');
   
    
    var btnLeftVoltar = 0;



    var lastIndex=0;


    document.querySelector('section.projetos .arrow-right')
    .addEventListener('click',()=>{
        imgsSlider.forEach((itens,index)=>{
           
           
                var lastImage  = document.querySelectorAll('section.projetos .projetos-single')[lastIndex];
                var actualImage = document.querySelectorAll('section.projetos .projetos-single')[index];


                lastImage.style.opacity =0;
                actualImage.style.opacity = 1;
        
                lastIndex = index;

                console.log(value);
                
            })
          
        
        })
    



      /*  function voltar(){
            btnLeftVoltar = btnLeftVoltar-1;
            imgsSlider.forEach((itens,index)=>{
                btnLeft.addEventListener('click',()=>{
                    imgsSlider[index].style.display="none";
                    imgsSlider[btnLeftVoltar].style.display="block";
    
                   if(btnLeftVoltar != 0){
                    btnLeftVoltar = btnLeftVoltar-1;
                   }else{
                    btnLeftVoltar = btnLeftVoltar+1;
                   }
                    
                })
            })
        }*/
   
       

  

      
       


   



