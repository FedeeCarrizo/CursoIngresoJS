function mostrar()
{
	var pais;
	var superficie;
	var superficieImpar;
	var superficieMenorACien;
	var superficieIgualCien;
	var paisSuperaCien;
	var paisSuperaCienSuperficie;
	var contador;
	var respuesta;
	var superficieTotal;
	var superficieMenor;
	var superficieMenorNombre;

	respuesta="Si";
	contador=0;
	superficieImpar=0;
	superficieMenorACien=0;
	superficieIgualCien=0;
	superficieTotal=0;

	while(respuesta == "Si")
	{
		pais=prompt("Ingrese un pais");

		superficie=prompt("Ingrese una superficie");
		superficie=parseInt(superficie);

		while(superficie < -100 || superficie > 1000)
		{
			superficie=prompt("Error, ingrese una superficie valida");
		}

		respuesta=prompt("Ingrese Si para continuar");
		//superfice impar
		if(superficie %2 == 1)
		{
			superficieImpar++;
		}

		if(superficie < 100)
		{
			superficieMenorACien++;
		}
		else
		{
			if (superficie == 100) 
			{
				superficieIgualCien++;
			}
		}
		//no anda
		if (superficie >= 100) 
		{
			paisSuperaCien=pais;
			paisSuperaCienSuperficie=superficie;
		}
		else
		{	
			if (superficie<paisSuperaCien) 
			{
				paisSuperaCien=pais;
				paisSuperaCienSuperficie=superficie;
			}
		}
		//hasta aca
		if (superficie > -100) 
		{
			superficieTotal=superficieTotal+superficie;
			contador++;
		}
		if(superficie>0)
		{
			superficieMenor=superfice;
			superficieMenorNombre=pais;
		}
		else
			{
				if (superficie>superficieMenor) 
				{
					superficieMenor=superficie;
					superficieMenorNombre=pais;
				}
			}

	}
	promedio=superficieTotal/contador
	alert(superficieMenorNombre + superficieMenor);

 	
}
