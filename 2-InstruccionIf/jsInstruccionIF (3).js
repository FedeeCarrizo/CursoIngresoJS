function mostrar()
{
	var edad;
	var mensaje;

	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor de edad")
	}
	else
	{
		alert("Es menor de edad")
	}
}