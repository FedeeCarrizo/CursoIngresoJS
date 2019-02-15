function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if(edad <18) 
	{
		mensaje="Es muy pequeño para no estar soltero";
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN