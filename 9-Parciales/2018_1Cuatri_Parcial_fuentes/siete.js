function mostrar()
{
	var velocidad;
	var combustible;
	var contador;
	var promedioVelocidad;
	var minimaVelocidad;
	var minimaVelocidadCombustible;
	var maximaVelocidad;
	var maximaVelocidadCombustible;
	var combustibleLiquido;
	var velocidadCombustibleSolido;
	var acumulador;

	contador=0;
	acumulador=0;
	promedioVelocidad=0;
	minimaVelocidad=0;
	combustibleLiquido=0;

	while(contador < 5)
	{
		contador=contador+1

		velocidad=prompt("Ingrese una velocidad");
		velocidad=parseInt(velocidad);

		promedioVelocidad=promedioVelocidad+velocidad;

		while(velocidad <0 || velocidad > 250)
		{
			velocidad=prompt("Error,ingrese una velocidad");
		}
		
		combustible=prompt("Ingrese tipo de combustible 'l' o 's'");

		while(combustible != "l" && combustible != "s")
		{
			combustible=prompt("Error, ingrese tipo de combustible 'l' o 's'");
		}

		if(contador < 5 && combustible == "s")
		{
			maximaVelocidad=velocidad;
			maximaVelocidadCombustible=combustible;
		}
		else
		{
			if (velocidad>maximaVelocidad) 
			{
				maximaVelocidad=velocidad
				maximaVelocidadCombustible=combustible
			}
		}
		if(contador < 5)
		{
			minimaVelocidad=velocidad;
			minimaVelocidadCombustible=combustible;
		}
		else
		{
			if (velocidad<minimaVelocidad) 
			{
				minimaVelocidad=velocidad;
				minimaVelocidadCombustible=combustible;
			}
		}
		if(velocidad>99 && combustible == "l")
		{
			combustibleLiquido=combustibleLiquido+1
		}
	}
	promedioVelocidad=promedioVelocidad/contador;
	alert("El promedio de las velocidad "+promedioVelocidad+", la velocidad mas baja fue de "+minimaVelocidad+ "y el tipo de combustible usado fue "+minimaVelocidadCombustible+", los combustibles liquidos que superaron los 100 km por hora son "+combustibleLiquido+" y la velocidad mas alta de los solidos fue de "+maximaVelocidad+ "y es de tipo "+maximaVelocidadCombustible);




	


}


