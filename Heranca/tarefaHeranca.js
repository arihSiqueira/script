function Animal(){
	this.barulho = '';
}

Animal.prototype = {
	fazerBarulho: function(){
		return this.barulho;
	}
}


function Gato(){
	console.log('ver');
	console.log(this);
	Animal.call();
	console.log(this);
	this.barulho =  'Miau'
}

function Cachorro(){
	Animal.call(this);
	this.barulho = 'Au'
}

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

function ManadaVirgula(){
	Manada.call(this);
	
}

ManadaVirgula.barulho = function(){


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