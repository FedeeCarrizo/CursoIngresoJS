function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	var mensaje;
//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene más de 29 días.";
			break;

		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="Este mes tiene mas de 30 días.";
			break;
	}
	alert(mensaje);
	


}//FIN DE LA FUNCIÓN