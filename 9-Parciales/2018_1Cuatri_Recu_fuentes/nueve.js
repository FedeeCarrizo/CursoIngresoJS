function mostrar()
{
	//pedir marca, pedir tamaño, pedir precio.
	//1)Necesito saber el mayor precio junto con la marca
	//(LG tamaño 3 y precio 3000)(Samsung tamaño 5 y precio 5000)(Iphone tamaño 4 y precio de 8000)(LG tmaño 5 precio 1000)(Samsung tamaño 4 precio 1000)
	//2)Promedio precio
	//3)Cantidad de celus que valen >2000
	//4)Celular, marca, tamaño del mas caro
	//5)lo mismo pero del barato
	//6)EL primer celular que sale 1000
	//7)Precio del ultimo celular "LG"
	var marca;
	var tamaño;
	var precio;
	var contador;
	var mayorPrecio;
	var mayorPrecioMarca;
	var mayorPrecioTamaño;
	var respuesta;
	var promedioPrecio;
	var acumuladorPrecio;
	var cantidadCelulares;
	contador=0;
	acumuladorPrecio=0;
	cantidadCelulares=0;
	respuesta="Si"

	while(respuesta == "Si")
	{
		marca=prompt("Ingrese una marca");
		tamaño=prompt("Ingrese un tamaño");
		precio=prompt("Ingrese un precio");

		tamaño=parseInt(tamaño);
		precio=parseInt(precio);

		acumuladorPrecio=acumuladorPrecio+precio


		if(contador==0)
		{
			mayorPrecio=precio;
			mayorPrecioMarca=marca;
			
		}
		else
		{
			if(precio>mayorPrecio)
			{
				mayorPrecio=precio;
				mayorPrecioMarca=marca;
				mayorPrecioMarca=tamaño
			}
		}
		

		if(precio>2000)
		{
			cantidadCelulares++
		}
		contador++
		respuesta=prompt("Ingrese Si para continuar"); 	
	}
	promedioPrecio=acumuladorPrecio/contador
	alert("El mayor precio es "+mayorPrecio+" y su marca es "+mayorPrecioMarca+ "y el promedio en total es de "+promedioPrecio+" la cantidad de celulares que su precio es mayor a 2000 son "+cantidadCelulares);
}
