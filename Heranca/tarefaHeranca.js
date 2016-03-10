function Animal(){
	this.barulhos = '';
}

Animal.prototype = {
	fazerbarulho: function(){
		return this.barulhos;
	}
}


function Gato(){
	Animal.call(this);
	this.barulhos =  'Miau'
}

Gato.prototype = new Animal();

function Cachorro(){
	Animal.call(this);
	this.barulhos = 'Au'
}

Cachorro.prototype = new Animal();


function Manada(){
	this.manadas = [];
}

Manada.prototype = {
	adicionar: function(animal){
		this.manadas.push(animal);
	},
	barulhos: function(){
		return 'Implemente';
	}
};

function ManadaVirgula(){
	Manada.call(this);
	
}

var Virgula = new Manada();

Virgula.barulhos = function(){
	var saida = '';
	for(var i=0; i<this.manadas.length;i++){
		saida+=this.manadas[i].fazerbarulho();
		if (i!=this.manadas.length-1)
			saida+=', '
	}
	return saida;
}
ManadaVirgula.prototype = Virgula;


function ManadaSustenido(){
	Manada.call(this);
}

//Por algum motivo, só assim pra conseguir sobrescrever o metodo 
var Sustenido = new Manada();

Sustenido.barulhos = function(){
	var saida = '';
	for(var i=0; i<this.manadas.length;i++){
		saida+='#'+this.manadas[i].fazerbarulho()+' '+'#'+this.manadas[i].fazerbarulho()+' ';
		
	}
	return saida;
}

ManadaSustenido.prototype = Sustenido;

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