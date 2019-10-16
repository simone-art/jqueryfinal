// No arquivo page2.html, faça uma instrução jQuery que selecione o input text pelo atributo, 
// depois navegue até seu elemento pai e adicione a classe "alert alert-info" nele.

$(document).ready(function(){
    $("input:text").parent().addClass("alert alert-info");
  
});
