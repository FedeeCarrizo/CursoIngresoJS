function mostrar()
{
	var edad;
	var estCivil;

	edad=document.getElementById('edad').value;
	estCivil=document.getElementById('estadoCivil').value;

	edad=parseInt(edad);

	if (edad <18 && estCivil!="Soltero") 
	{
		alert("Eres muy pequeño para NO ser soltero");
	}
}
