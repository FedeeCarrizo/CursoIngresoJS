function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var respuesta='si';

	
	var bandera;
	bandera="Es la primera";

	while(respuesta=="si")

	{
		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+" #: ");
		numero=parseInt(numero);
		if(bandera=="Es la primera")
		{
			maximo=numero;
			minimo=numero;
			bandera="lalala";
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero	
			}

			if(numero<minimo)
			{
				minimo=numero
			}
		}
		

		respuesta=prompt(" => Si para continuar")
		
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN