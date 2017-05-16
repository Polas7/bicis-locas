function validateForm(){
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;
var contraseña= document.getElementById("input-password").value;

/*esto no esta validando :(*/
if (nombre == "" || nombre.charAt(0).toUpperCase() != nombre.charAt(0)){ 
var content= document.getElementsByClassName("input-box")[0];
var element= document.createElement("span");
var text= document.createTextNode("Debe ingresar su nombre");
content.appendChild(element);
element.appendChild(text);
}

/*nop tampoco :(*/
if (apellido == "" || nombre.charAt(0).toUpperCase() != nombre.charAt(0)){
var content= document.getElementsByClassName("input-box")[1];
var element= document.createElement("span");
var text= document.createTextNode("Debe ingresar su apellido");
content.appendChild(element);
element.appendChild(text);
}
/*/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;*/
if (email == ""){
var content= document.getElementsByClassName("input-box")[2];
var element= document.createElement("span");
var text= document.createTextNode("Verifique su email");
content.appendChild(element);
element.appendChild(text);
}

/* validar? nope T-T 
if (contraseña === "password" || contraseña === "123456" || contraseña === "098754"){6}{*/

if(contraseña== ""){
var content= document.getElementsByClassName("input-box")[3];
var element= document.createElement("span");
var text= document.createTextNode("La contraseña debe contener al menos 6 caracteres");
content.appendChild(element);
element.appendChild(text);
}

 /*i try*/
if (document.getElementsByTagName("select")[0].value == 0){
        alert("Debes seleccionar tu tipo de bici");
    }

/* Se que le faltan cosas... neh!
function seleccion(){
var validacion = document.getElementsByClassName("select");

var content = document.getElementsByClassName("form input-box");

var inicio = document.getElementsByClassName("seleccion"[0]); deberia iterar y recorrer el select?

var element = document.createElement("span");
var text = document.createTextNode("No olvides escoger tu bici");
element.appendChild(text);
inicio.appendChild(element);											
	}*/
}

/*no me funciona sin estos parametros, why?? i dont know */
validateForm(nombre,apellido,email,contraseña);

 

