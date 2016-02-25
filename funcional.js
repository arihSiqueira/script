var f=function f(func){
	console.log("executando f");
}
console.log("f");
console.log(f);
var g = f;
console.log("f=1");
f=1;
console.log(f);
console.log("G");
console.log(g);
console.log("G():");
g();

function h(func){
	function nova(x){
		return 1;
	}
	return nova;
}

var shift=h();

console.log("Shift");
console.log(shift);
console.log(shift());

function reta(x){
	return x;
}

console.log("reta");
var retaComShift=h(reta);
console.log(retaComShift);
console.log(retaComShift(1));

console.log("Inicio decorador");


//decorator
function decorador(func, cont){
	if (cont === undefined)
		cont = 0;
	function funcDecorada(){
		console.log(cont)
		func();
		++cont;
	}

	return funcDecorada;
}

function imprimir(){
	console.log("Imprimindo");
}


console.log("Teste decorador");
var imprimirDecorada = decorador(imprimir); 
imprimirDecorada = decorador(imprimirDecorada, 10);

imprimirDecorada();
imprimirDecorada();
imprimirDecorada();

