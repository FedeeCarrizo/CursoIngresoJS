function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;
	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if (edad >17)
	{				
		mensaje="No eres adolescente";
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN