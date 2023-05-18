COLDIGO = new Object();
$(document).ready(function() {

   $("header").load("/ProjetoTrilhaWeb/pages/admin/general/header.html");
   $("footer").load("/ProjetoTrilhaWeb/pages/admin/general/footer.html");

   COLDIGO.carregaPagina = function (pagename){

      //limpa a tag secton excluindo tudo dentro dela
      $("secttion").empty();

      //Carrega a pagina solicitada dentro da section
      $("section").load(pagename+"/", function (response, status, info){
         if (status =="error"){
            var msg = "Houve um erro ao encontrar a página: "+info.status + " - "+info.statusText;
            $("section").html(msg);
         }
      });
   }

   //Define as configurações base de uma modal de aviso
   COLDIGO.exibirAviso = function (aviso){
      var modal = {
         title: "Mensagem",
         height: 250,
         width: 400,
         modal: true,
         buttons:{
            "OK": function (){
               $(this).dialog("close");
            }
         }
      };
      $("#modalAviso").html(aviso);
      $("#modalAviso").dialog(modal);
   };
});
