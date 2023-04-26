$(document).ready(function(){
	//Carrega cabeçalho, menu e rodapé aos respectivos locais
	$("header").load("/ProjetoTrilhaWeb/pages/site/general/cabecalho.html");
	$("nav").load("/ProjetoTrilhaWeb/pages/site/general/menu.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/site/general/rodape.html");
});


var telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', function(e) {
	var telefone = e.target.value;
	telefone = telefone.replace(/\D/g, ''); // remove todos os caracteres que não são dígitos
	telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2'); // adiciona o parêntese após o DDD
	telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); // adiciona o traço após os primeiros 5 dígitos
	e.target.value = telefone;
});

  
function validaFaleConosco() {
    
/////////////VALIDA O NOME
	var nome = document.frmfaleconosco.nome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	if(!expRegNome.test(nome)){
		alert("Preencha corretamente o campo Nome.");
		document.frmfaleconosco.nome.focus();
		return false;
	}
/////////////VALIDA O TELEFONE
	var telefoneInput = document.getElementById('telefone');
	var telefone = telefoneInput.value.replace(/\D/g, '');
	if (telefone.length < 10 || telefone.length > 11) {
		alert("Preencha corretamente o campo Telefone.");
		telefoneInput.focus();
		return false;
	}
/////////////COMPLETA COM () E  -
telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
telefone = telefone.replace(/(\d{4,5})(\d)/, '$1-$2');
telefoneInput.value = telefone;

/////////////VALIDA O E-MAIL
	var email = document.frmfaleconosco.email.value;
	var expRegEmail = new RegExp("^\\S+@\\S+\\.\\S+$");
	if(!expRegEmail.test(email)){
		alert("Preencha corretamente o campo E-mail.");
		document.frmfaleconosco.email.focus();
		return false;
	}
    /////////////VALIDA O MOTIVO
    if(document.frmfaleconosco.selmotivo.value==""){
        alert("Escolha um motivo para seu Contato!");
        document.frmfaleconosco.selmotivo.focus();
		return false;
    }
/////////////VALIDA O produto do motivo
    var campo = document.getElementsByName("selproduto")[0];
    if((document.frmfaleconosco.selmotivo.value=="PR")&&(campo.value == "")){
        alert("Escolha um produto para Informações");
		campo.focus();
        return false;
    }
/////////////VALIDA O COMENTARIO
    if(document.frmfaleconosco.txacomentario.value==""){
        alert("Preencha o campo Comentário");
        document.frmfaleconosco.txacomentario.focus();
		return false;
    }
    return true
}

//88888888888888888888888888888888888888888888888888888888
function verificaMotivo(motivo){
	//capturamos a estrutura div cujo ID é opcaoProduto na variavel elemento
	var elemento = document.getElementById("opcaoProduto");	

//	Se o valor da variável motivo for "PR"
	if(motivo=="PR"){

		//Criamos um elemento (tag) <select> e guardamos na variável homônima
		var select = document.createElement("select");
		//Setamos nesse novo select o atributo "name" com o valor "selproduto"
		select.setAttribute("name", "selproduto");
		//Conteúdo atual da variável select:
		//<select name="selproduto"></select>

		//Criamos um elemento (tag) <option> e guardamos na variável homônima
		var option = document.createElement("option");
		//Setamos nesse novo option o atributo "value" com o valor vazio
		option.setAttribute("value","");
		//Criamos o nó de texto "Escolha" e gravamos na variável "texto"
		var texto = document.createTextNode("Escolha");
		//Colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto);
		//Conteúdo atual da variável option:
		//<option value="">Escolha</option>

		//Colocamos o option criado como "filho" da tag select criada
		select.appendChild(option);
		//Conteúdo atual da variável select:
		//<select name="selproduto"><option value="">Escolha</opton></select>

		//Criamos um elemento (tag) <option> e guardamos na variável homônima 
		var option=document.createElement("option");
		//Setamos nesse novo option o atributo "value" com o valor "FR"
		option.setAttribute("value","FR");
		//Criamos um nó de texto "Freezer" e gravamos na variável "texto"
		var texto=document.createTextNode("Freezer");
		//Colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto);
		//Conteúdo atual da variável option:
		//<option value="FR">Freezer</option>

		//Colocamos o option criado como "filho" da tag select criada
		select.appendChild(option);
		//Conteúdo atual da variável select:
		/*
		 <select name="selproduto">
		 <option value="">Escolha</option><option value="FR">Freezer</option>
		 </select>
		 */

		//Criamos um elemento (tag) <option> e guardamos na variável homônima 
		var option=document.createElement("option");
		//Setamos nesse novo option o atributo "value" com o valor "GE"
		option.setAttribute("value","GE");
		//Criamos um nó de texto "Geladeira" e gravamos na variável "texto"
		var texto=document.createTextNode("Geladeira");
		//Colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto);
		//Conteúdo atual da variável option:
		//<option value="GE">Geladeira</option>

		//Colocamos o option criado como "filho" da tag select criada
		select.appendChild(option);
		//Conteúdo atual da variável select:
		/*
		 <select name="selproduto">
		 <option value="">Escolha</option><option value="FR">Freezer</option><option value="GE">Geladeira</option>
		 </select>
		 */

		//Colocamos o select criado como "filho" da tag div capturada no início da função
		elemento.appendChild(select);
		// Verifica se o motivo é "PR" e o valor selecionado é vazio
        
	}else{
		//Se a div possuir algum "primeiro filho"
		if(elemento.firstChild)
			//Removemos ele
			elemento.removeChild(elemento.firstChild);
	}
    
}
//88888888888888888888888888888888888888888888888888888888*/
//Assim que o documento HTML for carregado por completo..



