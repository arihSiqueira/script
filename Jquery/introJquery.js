console.log($('#id').length) // Só sera possivel acessar depois da pagina carregar. No DOM (Arvore de objeto)

//jeito em que carrega a pagina
$(document).ready( function(){ //inicializador de tudo
	console.log($('#id').length);
	var $h1 =  $("h1");
	var $id = $('#id2');
	var $filhos = $('.filhos');
	$("#esconder").click( function(event){
		console.log(event);
		$h1.hide();
	});
	$("#mostrar").click( function(event){
		//console.log(event);
		$id.show();
	});

	$("#slide-up").click( function(event){
		//console.log(event);
		$id.slideUp();
	});

	$("#slide-down").click( function(event){
		//console.log(event);
		$id.slideDown();
	});

	$("#slide-toggle").click( function(event){
		//console.log(event);
		$id.slideToggle();
	});

});

