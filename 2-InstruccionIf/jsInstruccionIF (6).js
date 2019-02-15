function mostrar()
{
//tomo la edad  


	var edad;
	var mensaje;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad >17) 
	{
		mensaje="Es mayor de edad";
	}
	else
	{
		   if(edad<13)
		   {
		   	 	mensaje="Es menor de edad";
		   }
		   else{

		   	mensaje= "sos adolescente";
		   }
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN