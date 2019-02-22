function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	var respuesta='si';
	while(1)

	{
		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+" #: ");
		numero=parseInt(numero);
		//acumulador=acumulador+ numero;

		respuesta=prompt(" => Si para continuar");
		if(numero>0)
		{
			positivo=positivo*contador
		}
		else
		{
				negativo=negativo*contador
		}

		if(respuesta!="si")
		{
			break;
		}

		
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN