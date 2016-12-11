/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
// ?


(function(win, doc){

	'use strict';

	// Elements
	var $txtCounter = doc.querySelector('[data-js="counter"]');
	var $btnStart   = doc.querySelector('[data-js="start"]');
	var $btnStop    = doc.querySelector('[data-js="stop"]');
	var $btnReset   = doc.querySelector('[data-js="reset"]');
	var stopTimer   = false;

	// Interaction Events
	$btnStart.addEventListener('click', function(){
		startCounter();
	}, false);

	$btnStop.addEventListener('click', function(){
		stopCounter();
	}, false);

	$btnReset.addEventListener('click', function(){
		resetCounter();
	}, false);

	// Functions
	function timer() {
		if( stopTimer === true )
			return;
		$txtCounter.value++;
		setTimeout( timer, 1000 );
	}

	function startCounter() {
		stopTimer = false;
		timer();
	}

	function resetCounter(value) {
		stopTimer = true;
		$txtCounter.value = 0;

	}

	function stopCounter() {
		stopTimer = true;
	}



})(window, document);
