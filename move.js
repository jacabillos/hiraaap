$(document).ready (function(){

    $('.right').click(function(){
         $('#box').css(
         {left:"+=5px"}
         );

     });
  });

$(document).ready (function(){

    $('.left').click(function(){
         $('#box').css(
         {left:"-=5px"}
         );

     });
  });


  $(document).ready (function(){

    $('.up').click(function(){
         $('#box').css(
         {top:"-=5px"}
         );

     });
  });


  $(document).ready (function(){

    $('.down').click(function(){
         $('#box').css(
         {top:"+=5px"}
         );

     });
  });

 $(document).keydown(function(e){
  //console.log(e.which);
  var key= e.which;
  /**left */
  var left_keys=[65,37];
  if (left_keys.includes(key)){
   $(".left").click();
 }
  });

  $(document).keydown(function(e){
  //console.log(e.which);
  var key= e.which;
  /**left */
  var left_keys=[83,39];
  if (left_keys.includes(key)){
   $(".right").click();
 }
  });

   $(document).keydown(function(e){
  //console.log(e.which);
  var key= e.which;
  /**left */
  var left_keys=[87,39];
  if (left_keys.includes(key)){
   $(".up").click();
 }
  });

   $(document).keydown(function(e){
  //console.log(e.which);
  var key= e.which;
  /**left */
  var left_keys=[68,40];
  if (left_keys.includes(key)){
   $(".down").click();
 }
  });