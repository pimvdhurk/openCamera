var doorzichtigheid = 3;


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
}
else if (doorzichtigheid == 2) {
	document.getElementById('blackCover').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	console.log('check');
}
else {
	document.getElementById('blackCover').style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

}
