function mostrar()
{

var sexo;

sexo = prompt("ingrese f ó m .");



	while(sexo != "f" && sexo !="m")
	{	
		sexo = prompt("Error, ingrese femenino ó masculino .");
	}
	document.getElementById('Sexo').value=sexo;

	alert("Usted es "+sexo);
}//FIN DE LA FUNCIÓN