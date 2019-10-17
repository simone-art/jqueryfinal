// No arquivo page2.html, faça uma instrução jQuery que selecione o input text pelo atributo, 
// depois navegue até seu elemento pai e adicione a classe "alert alert-info" nele.

$(document).ready(function(){
    $("input:text").parent().addClass("alert alert-info");

    $(".list-group-item").on("click", function (){
        $(this).removeClass("list-group-item-dark").addClass("list-group-item-info")
        $(this).siblings().addClass("list-group-item-dark")
    })
})
//OTRA FORMA DE HACER EL EJERCICIO: 
// $(document).ready(function(){
//     $("input").filter([type= "text"])parent().addClass("alert alert-info");

// });
// No arquivo page2.html, faça uma instrução jQuery que selecione o item de lista e:

// Adicione a classe "list-group-item-info" no item.
// Adicione a classe "list-group-item-dark" nos demais itens.


