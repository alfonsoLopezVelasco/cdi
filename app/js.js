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
		document.getElementById("numProd").innerHTML="Cesta"
	}
	if(sessionStorage["tallas"]=="true"){
		document.getElementById("prenda2").style.display="none";
		document.getElementById("talla_s").setAttribute("checked",true);
	}
	if(sessionStorage["tallam"]=="true"){
		document.getElementById("talla_m").setAttribute("checked",true);
	}
	if(sessionStorage["tallal"]=="true"){
		document.getElementById("prenda1").style.display="none";
		document.getElementById("talla_l").setAttribute("checked",true);
	}
	if(sessionStorage["tallaxl"]=="true"){
		document.getElementById("talla_xl").setAttribute("checked",true);
		document.getElementById("prenda1").style.display='none';
	}
	if(sessionStorage["cesta"]=="true" && sessionStorage["prendas"]>0){
		document.getElementById("numProd").style.display="block"
		document.getElementById("numProd").innerHTML="Cesta(" + sessionStorage["prendas"] + ")";
	}else{
		document.getElementById("numProd").innerHTML="Cesta"
	}
	
	if(sessionStorage[1]=="false"  || sessionStorage[1]==null){
		document.getElementById("1").style.display="none"
	}else{
		var textos = sessionStorage["1"].split(",")
		document.getElementById("p1t").innerHTML=textos[0];
		document.getElementById("p1").src=textos[2]
		document.getElementById("p1").alt="miniatura de " + textos[0]
	}
	if(sessionStorage[2]=="false"  || sessionStorage[2]==null){
		document.getElementById("2").style.display="none"
	}else{
		var textos = sessionStorage["2"].split(",")
		document.getElementById("p2t").innerHTML=textos[0];
		document.getElementById("p2").src=textos[2]
		document.getElementById("p2").alt="miniatura de " + textos[0]
	}
	if(sessionStorage[3]=="false"  || sessionStorage[3]==null){
		document.getElementById("3").style.display="none"
	}else{
		var textos = sessionStorage["3"].split(",")
		document.getElementById("p3t").innerHTML=textos[0];
		document.getElementById("p3").src=textos[2]
		document.getElementById("p3").alt="miniatura de " + textos[0]
	}
	if(sessionStorage[4]=="false"  || sessionStorage[4]==null){
		document.getElementById("4").style.display="none"
	}else{
		var textos = sessionStorage["4"].split(",")
		document.getElementById("p4t").innerHTML=textos[0];
		document.getElementById("p4").src=textos[2]
		document.getElementById("p4").alt="miniatura de " + textos[0]
	}
	if(sessionStorage[5]=="false"  || sessionStorage[5]==null){
		document.getElementById("5").style.display="none"
	}else {
		var textos = sessionStorage["5"].split(",")
		document.getElementById("p5t").innerHTML=textos[0];
		document.getElementById("p5").src=textos[2]
		document.getElementById("p5").alt="miniatura de " + textos[0]
	}
	if(sessionStorage[6]=="false"  || sessionStorage[6]==null){
		document.getElementById("6").style.display="none"
	}else{
		var textos = sessionStorage["6"].split(",")
		document.getElementById("p6t").innerHTML=textos[0];
		document.getElementById("p6").src=textos[2]
		document.getElementById("p6").alt="miniatura de " + textos[0]
	}
	if(sessionStorage[7]=="false"  || sessionStorage[7]==null){
		document.getElementById("7").style.display="none"
	}else{
		var textos = sessionStorage["7"].split(",")
		document.getElementById("p7t").innerHTML=textos[0];
		document.getElementById("p7").src=textos[2]
		document.getElementById("p7").alt="miniatura de " + textos[0]
	}
	if(sessionStorage[8]=="false"  || sessionStorage[8]==null){
		document.getElementById("8").style.display="none"
	}else{
		var textos = sessionStorage["8"].split(",")
		document.getElementById("p8t").innerHTML=textos[0];
		document.getElementById("p8").src=textos[2]
		document.getElementById("p8").alt="miniatura de " + textos[0]
	}
	if(sessionStorage[9]=="false"  || sessionStorage[9]==null){
		document.getElementById("9").style.display="none"
	}else{
		var textos = sessionStorage["9"].split(",")
		document.getElementById("p9t").innerHTML=textos[0];
		document.getElementById("p9").src=textos[2]
		document.getElementById("p9").alt="miniatura de " + textos[0]
	}
	if(sessionStorage[10]=="false"  || sessionStorage[10]==null){
		document.getElementById("10").style.display="none"
	}else{
		var textos = sessionStorage["10"].split(",")
		document.getElementById("p10t").innerHTML=textos[0];
		document.getElementById("p10").src=textos[2]
		document.getElementById("p10").alt="miniatura de " + textos[0]
	}
	
	if(sessionStorage["foto1"]=="true" && sessionStorage["foto1"]==null){
		document.getElementById("foto1").style.display="none"
	}
	if(sessionStorage["foto2"]=="true" && sessionStorage["foto2"]!=null){
		document.getElementById("foto2").style.display="none"
	}
	if(sessionStorage["foto3"]=="true" && sessionStorage["foto3"]!=null){
		document.getElementById("foto3").style.display="none"
	}
	if(sessionStorage["foto4"]=="true" && sessionStorage["foto4"]!=null){
		document.getElementById("foto4").style.display="none"
	}	
}

function resetCheckbox(){
	sessionStorage["tallas"]= "false";
	sessionStorage["tallam"]= "false";
	sessionStorage["tallal"]= "false";
	sessionStorage["tallaxl"]= "false";
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
		alert("Usuario o contraseña incorrecto, prueba de nuevo");
		sessionStorage["sesion"]="false"
	}
	
}
function salir(){
	sessionStorage.clear();
}


function aniadir(id, url){
	var talla = document.getElementById('talla')
	var selectTalla= talla.options[talla.selectedIndex];
	var resulTalla = selectTalla.value
	var i;
	if(sessionStorage["prendas"]==null || sessionStorage["prendas"]<10){
		if(sessionStorage["prendas"]==null){
			sessionStorage["prendas"] = 1
		}
		else{
			sessionStorage["prendas"]=parseInt(sessionStorage["prendas"]) + 1
		}
		sessionStorage["cesta"]="true"
		var tex = id + "," + resulTalla + "," + url 
		var key = sessionStorage["prendas"]
		sessionStorage.setItem(key, tex)
		
		
	}else{
		alert("No se puede tener mas de 10 productos para el probador")
	}
}

function eliminarFoto(foto){
	if(foto==1)
		sessionStorage["foto1"]="true"
	else if(foto==2)
		sessionStorage["foto2"]="true"
	else if(foto==3)
		sessionStorage["foto3"]="true"
	else
		sessionStorage["foto4"]="true"
}

function eliminar(posicion){
	var num = parseInt(sessionStorage["prendas"])
	if(posicion<num){
		for(i=posicion; i<num ; i++){
			sessionStorage[i]=sessionStorage[i+1]
		}
		sessionStorage[num]="false"
	}else{
		sessionStorage[posicion]="false"
	}
	sessionStorage["prendas"]=(num - 1)
}

function gestionFiltro(){
	resetCheckbox();
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
 
}