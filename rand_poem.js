

function b(numb) {
	var numero = Math.random() * 33;
	var nnn = Math.ceil(numero + 3);
	for (var i = 0; i <= nnn; i++) {
		var worda = Array("Hello ","I ","Love ","Pizza ","Robot ", " ", " ", " ", " ");
	var ix = worda[Math.floor(Math.random()*worda.length)];
		console.log(ix);
	}
} 
b(4);