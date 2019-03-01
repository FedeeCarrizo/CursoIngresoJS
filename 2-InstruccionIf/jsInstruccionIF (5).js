function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if (edad >17)
	{				
		alert("No eres adolescente");
	}
	else
	{
		if (edad <13) 
		{
			alert("No eres adolescente");
		}
	}
	

}//FIN DE LA FUNCIÓN