function mostrar()
{
	var numero;
	var negativos;
	var positivos;
	var respuesta;
	var contador;
	var producto;

	respuesta="Si";
	contador=0;
	negativos=1;
	positivos=0;


	while(respuesta == "Si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(numero > 0)
		{
			positivos=positivos+numero;
		}
		else
		{	
			negativos=negativos*numero;
		}

		respuesta=prompt("Ingrese si para continuar");
	}

	document.getElementById('suma').value=positivos;
	document.getElementById('producto').value=negativos;


}//FIN DE LA FUNCIÓN