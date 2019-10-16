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

})
//     $(".btn-secundary").click(function () {
//         $(".original").after($(".original").clone());
//     })
// })

// $(".btn-secundary").click(function () {
//     let content = (".original").html();
//     $(".original").after("<div class = row>" + content + "</div>")
// });

//ESTE CÓDIGO SIRVE PARA COPIAR CONTENIDO. ÉSTE ES MÁS ACONSEJABLE QUE EL 
//CLONE, PORQUE COPIA UNO POR UNO, MIENTRAS EL CLONE MULTIPLICA EL CONTENIDO
//LA CLASE ORIGINAL LA COLOCAS EN EL HTML DONDE QUIERES QUE EMPIECE A COPIAR EL CONTENIDO Y
//DEFINES UNA VARIABLE PARA PODER LLAMARLA:let content = (".original").html();
// Y DESPUÉS IDENTIFICAS LA DIV. $(".original").after("<div class = row>" + content + "</div>") 
//PARA DECIRLE QUE DESPUÉS DEL AFTER VAS A COPIAR EL CONTENIDO.