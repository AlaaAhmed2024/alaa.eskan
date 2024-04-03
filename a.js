$( document ).ready(function(){
 $("header li a" ).on('click' , function(){
  $(this).addClass('active').parent().siblings().find("a").removeClass("active")
 })  //end header

 var homeOffsetFromTop =$(".home").offset().top 
$(window).scroll(function(){
   var windowScroll =$(window).scrollTop()
    if(windowScroll>homeOffsetFromTop){
$(".home").css('background' ,'red')
    }else{
        $(".home").css('background' ,'coral')   
    };
    if(windowScroll>800){
       $("header").addClass('changeHeader')
    }else{
        $("header").removeClass('changeHeader') 
    }
}) //end scroll

}) //end