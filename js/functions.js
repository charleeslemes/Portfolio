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


/* vanilla js */

    var btnRight = document.querySelector('section.projetos .arrow-right');
    var btnLeft = document.querySelector('section.projetos .arrow-left');
    var imgsSlider1 = document.querySelectorAll('section.projetos .projetos-single');
    var imgsSlider2 = document.querySelectorAll('section.projetos .projetos-single');
    var lastImg = 0;
    var btnLeftVoltar = 0;

    frete();
    voltar();


    function frete(){
        imgsSlider1.forEach((itens,index)=>{
            btnRight.addEventListener('click',()=>{
                imgsSlider1[lastImg].style.display="none";
                imgsSlider1[index].style.display="block";
                
            })

            btnLeftVoltar++;
        })
    }



        function voltar(){
            btnLeftVoltar = btnLeftVoltar-1;
            imgsSlider2.forEach((itens,index)=>{
                btnLeft.addEventListener('click',()=>{
                    imgsSlider2[index].style.display="none";
                    imgsSlider2[btnLeftVoltar].style.display="block";
    
                   if(btnLeftVoltar != 0){
                    btnLeftVoltar = btnLeftVoltar-1;
                   }else{
                    btnLeftVoltar = btnLeftVoltar+1;
                   }
                    
                })
            })
        }
   
       

  

      
       


   



