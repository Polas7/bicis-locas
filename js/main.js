function datos(nombre, apellido, email, contraseña){
if(nombre == ""|| apellido=="" || email== ""|| contraseña==""){
	alert("Ingresa datos por favor");
}	
	
};


function validateForm(){
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;
var contraseña= document.getElementById("input-password").value;
var twitter= document.getElementById("input-social").value;
var button= document.getElementById("boton")[0];

datos(nombre, apellido, email, contraseña, button)
};

document.getElementById("boton").addEventListener("click", function(){
});




