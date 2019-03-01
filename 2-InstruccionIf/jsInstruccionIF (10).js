function mostrar()
{
	var random;
	var mensaje;

	random=Math.floor(Math.random() *10) + 1;

	if(random > 8)
	{
		mensaje="Excelente"
	}
	else
	{
		if (random <5 ) 
		{
			mensaje="Vamos, la proxima se puede"
		}
		else
		{
			mensaje="Aprobó"
		}
	}
	alert(random+" "+mensaje);
}