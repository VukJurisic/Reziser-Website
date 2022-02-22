console.clear();
const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
    
 //Toggle Nav
     navLinks.forEach((link,index) =>{
      
       if(link.style.animation) {
           link.style.animation=''
        } else {
          //Here there was a small mistake of using normal quotes '' and not back ticks ``.
          //Thats it!
            link.style.animation=`navLinkFade 0.5s ease forwards ${index /7+ 0.1}s`;
        }
        
           });


    burger.addEventListener('click',  () => {
 
        nav.classList.toggle('nav-active');

         


       
        burger.classList.toggle('toggle');

           
       document.addEventListener('click', function(event) {

            

        if('nav-active' && (event.target.closest(".burger") || event.target.closest("nav.nav-links li"))) {
            return;
      }
      else {
         nav.classList.remove('nav-active');
         burger.classList.remove('toggle');
      }
   })

 
  
    });
    
  }

 

navSlide();

