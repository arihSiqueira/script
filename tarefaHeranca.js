function Manada(){
	this.manadas = [];
}

Manada.prototype = {
	adicionar: function(animal){
		this.manadas.push(animal);
	},
	barulho: function(){
		return 'Implemente';
	}
};

function Animal(){
	
}

function Gato(){
	return 'Miau'
}

function Cachorro(){
	return 'Au'
}

function ManadaVirgula(){
	Manada.call(this);
	
}



function ManadaSustenido(){
}


var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());