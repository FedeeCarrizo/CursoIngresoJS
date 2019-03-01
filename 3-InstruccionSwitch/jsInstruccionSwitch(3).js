function mostrar()
{
//tomo la edad  
	var mesDelAño;
	var mensaje;

	mesDelAño= document.getElementById('mes').value;

	switch(mesDelAño)
	{
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

		mensaje="Este mes tiene 30 dias o mas"

		break;

		case "Febrero":

		mensaje="Este no tiene mas de 29 dias"

		break;
	}
	alert(mensaje)



}//FIN DE LA FUNCIÓN