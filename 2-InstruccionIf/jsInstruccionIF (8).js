function mostrar()
{
	var edad;
	var estadCivil;
	var mensaje;

	edad=document.getElementById('edad').value;
	estadCivil=document.getElementById('estadoCivil').value;

	edad=parseInt(edad);

	if (edad < 18 && estadCivil != "Soltero") 
	{

	}
	else
	{
		if (edad >17 && estadCivil == "Soltero") 
		{
			alert("Es soltero y no es menor");
		}
	}

}