function gerarListener(){
	var observerPatter={};
	var observers = [];
	var contador = 0;
    
    observerPatter.addObserver = function(obs) {
    	observers.push(obs);
    }

    observerPatter.executar = function(){
       for(var i=0; i<observers.length;i++){
    		var evento={'contador':contador};
    		var listener = observers[i];
    		listener(evento);
    	}
    	contador++
    }

    return observerPatter;
}

var listener = function (evento) {
	console.log('listener 1: '+evento.contador);
}


var listener2 = function (evento) {
	console.log('listener 2: '+evento.contador);
}

var contadorObserver=gerarListener();
contadorObserver.addObserver(listener);
contadorObserver.addObserver(listener2);

contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();

console.log('new Teste');
console.log('new Teste');
console.log('new Teste');


var contadorObserver2=gerarListener();
contadorObserver2.addObserver(listener);
contadorObserver2.addObserver(listener2);

contadorObserver2.executar();
contadorObserver2.executar();
contadorObserver2.executar();
contadorObserver2.executar();
contadorObserver2.executar();
