(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        
        jQuery(window).scroll(function(){
            if($(this).scrollTop() > 200){
                $(".scroll-to-top").fadeIn();
            }else{
                $(".scroll-to-top").fadeOut();
            }
        });
        
        jQuery(".scroll-to-top").on("click", function(){
            $("html, body").animate({scrollTop: 0}, 1000);
            return false;
        });
        
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));