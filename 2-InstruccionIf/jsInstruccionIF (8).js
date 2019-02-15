function mostrar()
{
//tomo la edad  
	var edad;
	var estadocivil;
	var mensaje;

	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;
	edad=parseInt(edad);

	if(edad >18)
	{
		if(estadocivil == "Soltero")

			mensaje="Es soltero y no es menor";
	}

	alert(mensaje);
	


}//FIN DE LA FUNCIÓN