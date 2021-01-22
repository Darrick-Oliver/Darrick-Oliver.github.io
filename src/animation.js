$(document).ready(function(){
   $(".title").click(function() {
      $(".title").fadeOut(500);
      $("p").appendTo(document.body)
   })
});