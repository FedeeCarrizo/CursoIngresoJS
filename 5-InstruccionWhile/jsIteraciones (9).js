function mostrar()
{
	var numero;
	var maximoNumero;
	var minimoNumero;
	var respuesta;
	var contador;

	respuesta="Si";
	contador=0;

	while(respuesta=="Si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(contador == 0)
		{
			maximoNumero=numero;
			minimoNumero=numero;
		}
		else
		{
			if (numero > maximoNumero) 
			{
				maximoNumero=numero;
			}
			else
			{
				if (numero < minimoNumero) 
				{
					minimoNumero=numero;
				}
			}
		}
		contador++;
		respuesta=prompt("Ingrese Si para continuar");
	}


	document.getElementById('maximo').value=maximoNumero;
	document.getElementById('minimo').value=minimoNumero;


}//FIN DE LA FUNCIÓN