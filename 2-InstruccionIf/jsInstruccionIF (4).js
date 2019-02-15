function mostrar()
{
//tomo la edad  
	var edad;
	var mensaje;
	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if (edad <18 && edad >12) 
	{				
		mensaje="Eres adolescente";		
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN