function mostrar()
{
	var sexo;

	sexo=prompt("Ingrese si es f o m");

	while(sexo != "f" && sexo != "m")
	{
		sexo=prompt("Ingrese si es f o m");
	}
	alert("Usted es "+sexo);
}//FIN DE LA FUNCIÓN