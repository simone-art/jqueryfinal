//**1.** Faça uma instrução jQuery que selecione todos elementos img da página que possuem alt 
// e os imprima no log do console.

// $(document).ready(function(){
//     $(".card-img").find("alt");
//     $(".card-img").remove("alt");
// });

$(document).ready(function(){
    $(".card-img").filter("[alt]");
    console.log ($(".card-img").filter("[alt]"))
    
});

