var doorzichtigheid = 3;

kleurAanpassen();

function donkerder() {

	if (doorzichtigheid < 3) {

		doorzichtigheid = doorzichtigheid + 1;
	}
	else {

	}
  
  kleurAanpassen();
  console.log(doorzichtigheid);
}



function lichter() {

 	if (doorzichtigheid > 1) {

		doorzichtigheid = doorzichtigheid - 1;
	}
	else {
	}
  
  kleurAanpassen();
  console.log(doorzichtigheid);
}


function kleurAanpassen() {

if (doorzichtigheid == 3) {
	document.getElementById('blackCover').style.backgroundColor = 'rgba(0, 0, 0, 1)';
	document.getElementById('infoText').textContent = 'Probeer de spiegels goed te zetten. Hierdoor zal er licht vanuit de lens naar de zoeker worden geleid.';
}
else if (doorzichtigheid == 2) {
	document.getElementById('blackCover').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	document.getElementById('infoText').textContent = 'De eerste spiegel staat goed! Er komt al meer licht door de zoeker.';
}
else {
	document.getElementById('blackCover').style.backgroundColor = 'rgba(0, 0, 0, 0)';
	document.getElementById('infoText').textContent = 'Allebei de spiegels staan goed. Je ziet nu precies wat de camera fotografeert.';
}

}
