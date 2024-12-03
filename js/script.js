$('#destaque').slick({
    dots: true,
    autoplay:true,
    autoplayspeed: 4000,
    arrows: false
  });
  
  let itens = document.querySelector("#itens");
  
  let menu = document.querySelector("#iconMenu");
  
  menu.addEventListener("click",function(){
      if(itens.style.display == "block"){
        itens.style.display ="none";
      }else{
  itens.style.display ="block";
      }
  })
  