function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var respuesta='si';

	maximo= -999;
	minimo= 999;

	while(respuesta=="si")

	{
		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+" #: ");
		numero=parseInt(numero);
		if(numero>maximo)
		{
			maximo=numero	
		}

		if(numero<minimo)
		{
			minimo=numero
		}

		respuesta=prompt(" => Si para continuar")
		
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN