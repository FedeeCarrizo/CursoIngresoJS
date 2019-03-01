function mostrar()
{
	var numero;
	var respuesta;
	var acumulador;
	var promedio;
	var contador;

	respuesta="Si"
	contador=0;
	acumulador=0;

	while(respuesta == "Si")
	{
		contador=contador+1;

		numero=prompt("Ingrese otro numero");
		numero=parseInt(numero);
		
		acumulador=acumulador+numero;

		respuesta=prompt("Ingrese si para continuar");	
	}
	
	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;
}//FIN DE LA FUNCIÓN