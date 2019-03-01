function mostrar()
{
 var numeroIngresado;
 var numeroAnterior;
 var acumulador;

 acumulador=0;
 numeroIngresado=prompt("Ingrese un numero");
 numeroIngresado=parseInt(numeroIngresado);

 for(numeroAnterior=numeroIngresado-1;numeroAnterior > 0;numeroAnterior--)
	{
		if(numeroIngresado % numeroAnterior==0)
		{
			acumulador=acumulador+numeroAnterior
		}
		console.log(numeroAnterior);
	}
	if(numeroIngresado==acumulador)
	{
		console.log("Es un numero perfecto");
	}
	else
		console.log("No es un numero perfecto");

}//FIN DE LA FUNCIÓN