$(function() {
   $(".removeLineBtn").click(function() {
      
      
      $(this).parent().parent().parent().parent().remove();
      
      var childrens = $(".accordion").children('h5');
      
//      var i = 1;
//      childrens.each(function(){ 
//         $(this).text("라인 " + i );
//      });

      
   });
});