function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var numeroSiguiente;
	var mitadUno;
	var mitadDos;
	var cuenta;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroAnterior=numeroIngresado-1;numeroIngresado > 0; numeroAnterior--)
	{
		if(numeroAnterior=0)
		{
			mitadUno=mitadUno+numeroAnterior;
			break;
		}

		for(numeroSiguiente=numeroIngresado+1;numeroIngresado > numeroIngresado; numeroSiguiente++)
		{
			if(numeroSiguiente>numeroIngresado)
			{
				mitadUno=numeroSiguiente
				mitadDos=mitadUno;
				break;
			}
		}
	}
	cuenta=mitadUno+mitadDos
	if(cuenta==mitadUno+mitadDos)
	{
		console.log("Este numero es un centro numerico"+ cuenta)
	}
}