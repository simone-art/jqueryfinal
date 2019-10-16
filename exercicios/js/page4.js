$(function(){

    $(".btn-primary").click(function(){
        $(".Tenya").slideDown(1000);  
        $(".Momo").slideDown(5000);   
        $(".Kendo").slideDown(8000);  
    })
    $(".btn-primary").click(function(){
        $( ".btn-primary" ).remove();
        $(".btn-primary").removeClass("btn-primary");
        $(".btn-secundary").addClass("btn-primary");
        // $(".btn-primary").attr("disable", true);
        // $(".btn-secundary").attr("enabled", true);
        
        
    })
    (".Tenya").on("click", function(){
        $(this).hide(Tenya);
    })
})

