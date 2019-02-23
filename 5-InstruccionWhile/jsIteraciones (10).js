function mostrar()
{

	var positivos=0;
	var negativos=1;
	var contador=0;
	var mensaje;
	var cantidadnegativos;
	var cantidadpositivos;
	var sumapositivo;
	var sumanegativo;
	var cantidadpares;
	var ceros;
	var prompositivo;
	var promnegativo;
	var respuesta="si";

	sumanegativo=0;
	sumanegativo=0;
	cantidadpares=0;
	cantidadpositivos=0;
	cantidadnegativos=0;
	ceros=0;

	while(1)

	{
		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+" #: ");
		numero=parseInt(numero);
		//acumulador=acumulador+ numero;

		respuesta=prompt(" => Si para continuar");

		if (numero<0) 
		{
			sumanegativo=sumanegativo+numero;
			cantidadnegativos=cantidadnegativos+1;
		}
		else
		{
			if (numero>0) 
			{
				sumapositivo=sumapositivo+numero;
				cantidadpositivos=cantidadpositivos+1
			}
			else
			{
				ceros=ceros+1
			}

		if (cantidadpares) 
		{
			cantidadpares=cantidadpares+1
		}	
	}
	



}//FIN DE LA FUNCIÓN