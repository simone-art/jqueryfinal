// $ (function (){
//     $ ("#eventType").change (function (){
//         let selected = $("#eventType :selected").val();
//         if (selected === "Teatro"){
//          $("#containerForm").children(".conceptFinal").hide();
//          $("#containerForm").children("selected").show();

//         }
//     })
// })

$(function (){
    $("#eventType").change (function (){
        let selected = $("#eventType :selected").val();
        if (selected === "Teatro"){
        $("#titulo,#sinopsis,#texto,#direccion,#elenco,#duracion,#clasificacion,#entrada,#gratuita").show();
        $("#conceptFinal,#libros,#autor,#moderador,#curador,#banda,#invitados").hide();
    }else if (selected === "Cinema"){
        $("#titulo,#sinopsis,#direccion,#elenco,#duracion,#clasificacion,#entrada,#gratuita").show();
        $("#texto,#conceptFinal,#libros,#autor,#moderador,#curador,#banda,#invitados").hide(); 
    }else if (selected === "Debate Literário"){
        $("#titulo,#libros,#autor,#moderador,#duracion,#clasificacion,#gratuita").show();
        $("#texto,#conceptFinal,#sinopsis,#direccion,#elenco,#entrada,#curador,#banda,#invitados").hide(); 
    }else if (selected === "Dança"){
        $("#titulo,#sinopsis,#conceptFinal,#direccion,#elenco,#duracion,#clasificacion,#entrada,#gratuita").show();
        $("#texto,#libros,#autor,#moderador,#curador,#banda,#invitados").hide();
    }else if (selected === "Artes visuais e exposições"){
        $("#titulo,#sinopsis,#curador,#invitados,#clasificacion,#gratuita").show();
        $("#texto,#conceptFinal,#direccion,#elenco,#duracion,#libros,#autor,#moderador,#banda,#entrada").hide();
    }else if (selected === "Música"){
        $("#titulo,#sinopsis,#banda,#clasificacion,#entrada,#gratuita").show();
        $("#texto,#conceptFinal,#direccion,#elenco,#curador,#invitados,#duracion,#libros,#autor,#moderador").hide();
    }else if (selected === "--selecione--"){
        $("#titulo,#sinopsis,#texto,#conceptFinal,#direccion,#elenco,#curador,#invitados,#duracion,#libros,#autor,#moderador,#banda,#clasificacion,#entrada,#gratuita").show(); 
    }
    })
})

    $("#gratuita").change(function(){
        if$(this).prop("checked")
        $(".entrada").hide();
    }else{
        $(".entrada").show()
})