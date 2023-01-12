function encriptar() {

	var texto = document.getElementById("inputTexto").value.toLowerCase();

	var txtcifrado = texto.replace(/e/img, "enter");
	var txtcifrado = txtcifrado.replace(/o/img, "ober");
	var txtcifrado = txtcifrado.replace(/i/img, "imes");
	var txtcifrado = txtcifrado.replace(/a/img, "ai");
	var txtcifrado = txtcifrado.replace(/u/img, "ufat");
	
	document.getElementById("img").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("texto2").innerHTML = txtcifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}
function desencriptar() {

	var texto = document.getElementById("inputTexto").value.toLowerCase();

	var txtcifrado = texto.replace(/enter/img, "e");
	var txtcifrado = txtcifrado.replace(/ober/img, "o");
	var txtcifrado = txtcifrado.replace(/imes/img, "i");
	var txtcifrado = txtcifrado.replace(/ai/img, "a");
	var txtcifrado = txtcifrado.replace(/ufat/img, "u");
	
	document.getElementById("img").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("texto2").innerHTML = txtcifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}
function copiar(){
	var contenido = document.querySelector("#texto2");
	contenido.select();
	document.execCommand("copy");	
}