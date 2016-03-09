function Pessoa(){

	this.nome = 'Arihane';

}

Pessoa.prototype = {cumprimentar: function(){
	return 'Olá, meu nome é ' + this.nome;
		}
};

function Homem(){
	this.sexo='Masculino'
	Pessoa.call(this);
}

//
//Homem.prototype = new Pessoa();
var HomemPrototype = new Pessoa();
HomemPrototype.atividade = function(){
	return this.nome+' é do sexo '+this.sexo+', portanto, joga futebol'
};

//Deu erro: HomemPrototype.prototype = new Pessoa(); //quero tanto os atributos quanto o contexto pessoa
Homem.prototype = HomemPrototype; // aqui quero só a função


var arihane = new Pessoa();
var teste = new Homem();
teste.nome = 'Teste';

console.log(arihane.cumprimentar());
console.log(arihane.nome);
console.log(teste.cumprimentar());
console.log(teste.cumprimentar());
console.log('teste')
console.log(teste.atividade());
  
Pessoa.prototype.idade = 33;
console.log(teste.idade);

function f(a,b){
	console.log(this);
	console.log(a+b);
}


//trocar o contexto de this. Metodos call e apply
f('a','b');
var contexto = {nome:'contexto'};
f.call(contexto, 'A','B');
f.apply(contexto,['C','D']);



