document.querySelector(".Diät").onclick = function(){

	let num2 = document.querySelector(".number2").value;
	let Ergebnis = parseInt(num2)*21.5;
	document.querySelector(".Erg").value=Ergebnis;


}
document.querySelector(".Muskelaufbau").onclick = function(){

	let num2 = document.querySelector(".number2").value;
	let Ergebnis2 = parseInt(num2)*40;
	document.querySelector(".Erg").value=Ergebnis2;



}
