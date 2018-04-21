var n = 0;
var productos;
var usuarios = [["Laura", "passLaura"],["Alfonso","passAlfonso"],["David","passDavid"]];
var nombreUsuario;

function cambiarTextos(){
	if(sessionStorage["sesion"]=="true"){
		document.getElementById("inicio_sesion").innerHTML="Desconectar"
		document.getElementById("inicio_sesion").className="btn btn-danger btn-lg"
		document.getElementById("nombre").innerHTML= sessionStorage["nombreUsuario"] + ", ";
	}else{
		document.getElementById("promo").style.display='none';
	}
	if(sessionStorage["tallas"]=="true"){
		document.getElementById("prenda2").style.display="none";
		document.getElementById("talla_s").setAttribute("checked",true);
	}
	if(sessionStorage["tallam"]=="true"){
		document.getElementById("talla_m").setAttribute("checked",true);
	}
	if(sessionStorage["tallal"]=="true"){
		document.getElementById("talla_l").setAttribute("checked",true);
	}
	if(sessionStorage["tallaxl"]=="true"){
		document.getElementById("talla_xl").setAttribute("checked",true);
		document.getElementById("prenda1").style.display='none';
	}
	if(sessionStorage["color1"]=="true"){
		document.getElementById("prenda2").style.display="none";
		document.getElementById("prenda3").style.display="none";
		document.getElementById("color1").setAttribute("checked",true);
	}
	if(sessionStorage["color2"]=="true"){
		document.getElementById("color2").setAttribute("checked",true); 
		document.getElementById("prenda1").style.display="none";
		document.getElementById("prenda3").style.display="none";
	}
	if(sessionStorage["color3"]=="true"){
		document.getElementById("color3").setAttribute("checked",true);
		document.getElementById("prenda1").style.display="none";
		document.getElementById("prenda2").style.display="none";
	}
	
}

function resetCheckbox(){
	sessionStorage["tallas"]= "false";
	sessionStorage["tallam"]= "false";
	sessionStorage["tallal"]= "false";
	sessionStorage["tallaxl"]= "false";
	sessionStorage["color1"]="false";
	sessionStorage["color2"]="false";
	sessionStorage["color3"]="false";
	
}

function contadorProductos(n){
	document.getElementById("").innerHTML = "(" + n +  ")";
	
}

function comprobarDatosUsuario() {
	var u = document.getElementById("user").value;
	var p = document.getElementById("pass").value;
	var i = 0;
	var encontrado = false;
	do{
		if(usuarios[i][0] == u && usuarios[i][1] == p)
			encontrado = true;
		else
			i++;		
	}while(i<usuarios.length && !encontrado);
	if(encontrado){
		sessionStorage["sesion"]="true";
		sessionStorage["nombreUsuario"] = usuarios[i][0];
		location.href="inicio.html"
	}
	else{
		alert("Usuario o contraseņa incorrecto, prueba de nuevo");
		sessionStorage["sesion"]="false"
	}
	
}
function salir(){
	sessionStorage.clear();
}

function gestionFiltro(){
	if(document.getElementById("talla_s").checked){
		sessionStorage["tallas"]= "true";
		document.getElementById("talla_s").setAttribute("checked",true);
	}else{
		sessionStorage["tallas"]= "false";
	}
	if(document.getElementById("talla_m").checked){
		sessionStorage["tallam"]="true";
		document.getElementById("talla_m").setAttribute("checked",true); 
	}else{
		sessionStorage["tallam"]= "false";
	}
	if(document.getElementById("talla_l").checked){
		sessionStorage["tallal"]="true";
		document.getElementById("talla_l").setAttribute("checked",true); 
	}else{
		sessionStorage["tallal"]= "false";
	}
	if(document.getElementById("talla_xl").checked){
		sessionStorage["tallaxl"]="true";
		document.getElementById("talla_xl").setAttribute("checked",true);
	}else{
		sessionStorage["tallaxl"]= "false";
	}
	if(document.getElementById("color1").checked){
		sessionStorage["color1"]="true";
		document.getElementById("color1").setAttribute("checked",true);
	}else{
		sessionStorage["color1"]= "false";
	}
	if(document.getElementById("color2").checked){
		sessionStorage["color2"]="true";
		document.getElementById("color2").setAttribute("checked",true);
	}else{
		sessionStorage["color2"]= "false";
	}
	if(document.getElementById("color3").checked){
		sessionStorage["color3"]="true";
		document.getElementById("color3").setAttribute("checked",true);
	}else{
		sessionStorage["color3"]= "false";
	}
}

function borrarFiltros(){
	resetCheckbox();
	document.getElementById("prenda1").style.display="block";
	document.getElementById("prenda2").style.display="block";
	document.getElementById("prenda3").style.display="block";
	document.getElementById("talla_s").setAttribute("checked",false); 
	document.getElementById("talla_m").setAttribute("checked",false); 
	document.getElementById("talla_l").setAttribute("checked",false); 
	document.getElementById("talla_xl").setAttribute("checked",false); 
	document.getElementById("color1").setAttribute("checked",false); 
	document.getElementById("color2").setAttribute("checked",false);
	document.getElementById("color3").setAttribute("checked",false); 
}