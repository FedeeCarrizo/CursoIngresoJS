function mostrar()
{
	var contador;
	var sexo;
	var nota;
	var promedio;
	var acumuladornota;
	var bandera;
	var notaminima;
	var cantidadvarones;
	var mensaje;
	var minimo;

	contador=0;
	acumuladornota=0;
	

	while(contador<5)
	{
		contador=contador+1
		nota=prompt("Ingrese nota del 1 al 10");
		sexo=prompt("ingrese si es f o m");
		if(bandera=="Es la primera")
		{
			minimo=nota;
			bandera="lalala";
		}
		else
			if(nota<minimo)
			{
				nota=minimo
			}

		while(sexo !="f" && sexo!="m")
		{
			sexo=prompt("ingrese si es f o m");	
		}
		
		if (nota>-1 && nota<11) 
		{
			nota=parseInt(nota)
			nota=prompt("Ingrese nota del 1 al 10");
			acumuladornota=acumuladornota+nota;
		}

		if (nota>5 && sexo=="m")
		{
			cantidadvarones=cantidadvarones+1;
		}	
	}

	
}
