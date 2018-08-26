// A $( document ).ready() block.
$(document).ready(function(){
  detectScroll();
  $(".main").height(window.innerHeight -150)
})

function detectScroll(){
  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      // console.log(scroll);

      if(scroll>10){
          $("#header").addClass("fixed");
      } else{ 
          $("#header").removeClass("fixed");
      }
    }
  );
}