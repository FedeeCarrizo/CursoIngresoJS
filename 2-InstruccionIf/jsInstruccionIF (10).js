function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	
	random=Math.floor(Math.random() *10) + 1;

	if(random >8) 
	{
		mensaje="Excelente"
	}
	else
	{
		if(random<4)
		{
			mensaje="Vamos, para la proxima se puede"
		}
		else
		{
			mensaje="Aprobó"
		}
	}
	alert(random+ " "+ mensaje);


	


}//FIN DE LA FUNCIÓN