function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var numeroRecorrido;


	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroRecorrido=numeroIngresado-1; numeroRecorrido >1; numeroRecorrido--)
	{
		for(numeroAnterior=numeroRecorrido-1;numeroAnterior > 0;numeroAnterior--)
		{
			
			if(numeroRecorrido % numeroAnterior==0)
			{
				break;
			}
		
		}
    
		if(numeroAnterior==1)
		{
		console.log("Es primo" + numeroRecorrido);
		}
    }
	
	



}//FIN DE LA FUNCIÓN