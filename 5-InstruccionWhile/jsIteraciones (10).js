function mostrar()
{
	var respuesta;
	var numero;
	var sumanegativos;
	var sumapositivos;
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	var contador;
	var diferenciaFinal;

	respuesta="Si";
	contador=0;
	sumapositivos=0;
	sumanegativos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;
	diferenciaFinal=0;

	while(respuesta=="Si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		//suma de negativos
		if(numero < 0)
		{
			sumanegativos=sumanegativos+numero
			contadorNegativos++;
			promedioNegativos=sumanegativos/contadorNegativos;
		}//suma de positivos
		else
		{
			sumapositivos=sumapositivos+numero;
			contadorPositivos++;
			promedioPositivos=sumapositivos/contadorPositivos
		}
		//contador de ceros
		if(numero == 0)
		{
			contadorCeros++;
		}
		//contador de pares
		if(numero % 2 ==0)
		{
			contadorPares++;
		}


		respuesta=prompt("Ingrese Si para continuar");
	}
	diferenciaFinal=sumapositivos - sumanegativos
	document.write(
					"1) La suma de los negativos es "+sumanegativos+ "<br>"+
					"2) La suma de los positivos es "+sumapositivos+ "<br>"+
					"3) La cantidad de positivos son"+contadorPositivos+ "<br>"+
					"4) La cantidad de negativos son "+contadorNegativos+ "<br>"+
					"5) La cantidad de ceros es "+contadorCeros+ "<br>"+
					"6) La cantidad de numeros pares es de "+contadorPares+ "<br>"+
					"7) El promedio de los negativos es "+promedioNegativos+ "<br>"+
					"8) El promedio de los positivos es de "+promedioPositivos+ "<br>"+
					"9) Diferencia entre postivos y negativos es de "+diferenciaFinal+ "<br>")




		
}//FIN DE LA FUNCIÓN