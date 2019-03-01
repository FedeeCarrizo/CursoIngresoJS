function mostrar()
{
	var contador;
	var acumulador;
	var promedio;
	var numero;

	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		contador=contador+1
		numero=prompt("Ingrese otro numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	}

	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;
}//FIN DE LA FUNCIÓN