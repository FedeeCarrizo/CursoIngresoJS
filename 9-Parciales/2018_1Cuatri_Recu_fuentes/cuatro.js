function mostrar()
{
	var numero_uno;
	var numero_dos;
	var numero_tres;
	var numero_cuatro;
	var resultado;
	var mensaje;
	var mayor;



	numero_uno=prompt("Ingrese numero");
	numero_dos=prompt("Ingrese numero");
	numero_tres=prompt("Ingrese numero");
	numero_cuatro=prompt("Ingrese numero");

	numero_uno=parseInt(numero_uno);
	numero_dos=parseInt(numero_dos);
	numero_tres=parseInt(numero_tres);
	numero_cuatro=parseInt(numero_cuatro);
	resultado=parseInt(resultado);

	resultado = numero_uno + numero_dos + numero_tres + numero_cuatro 

	if (resultado >99)
	{
		mensaje=resultado*0.90
	}
	else
	{
		if(resultado>50) 
		{
			mensaje=resultado*0.95
		}
		else
		{
			mensaje=resultado*1.15
		}
	}
	alert("Tu compra es de $"+mensaje);
}


