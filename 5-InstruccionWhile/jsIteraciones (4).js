function mostrar()
{
	var numero;

	numero=prompt("Ingrese un numero del 0 al 9");

	while(numero > 10 || numero < -1 )
	{
		numero=parseInt(numero);
		numero=prompt("Ingrese un numero del 0 al 9");
	}
	document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN