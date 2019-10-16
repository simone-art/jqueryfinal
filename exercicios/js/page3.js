$(function () {

    $(".btn-primary").click(function () {
        $(".Shoto").toggle(1000);
    })

    $(".btn-primary").click(function () {
        $(".Bakugo").toggle(4000);
    })

    $(".btn-primary").click(function () {
        $(".Izuku").toggle(9000);
    })



//EN ESTE EJERCICIO PUEDES LLAMAR POR LA CLASE. EN ESTE CASO CON 
//BUTTONS
// $ (FUNCTION (){
//     $("buttons").click(function(){
// $(".card:eq(0)".toggle(9000); 
// $(".card:eq(1)".toggle(9000); 
// $(".card:eq(2)".toggle(9000);  
// })
//});


    $(".btn-secundary").click(function () {
        $("html").append($("body").clone(true));
    });


    $(".card-title").hover(
        function () {
            $(this).css("color", "yellow");
        },
        function () {
            $(this).css("color", "black");
        }
    );

});




// $ (function(){

//         $(".btn-secundary").click(function(){
//             $(".row").clone().appendTo("html")
//         })
//     })