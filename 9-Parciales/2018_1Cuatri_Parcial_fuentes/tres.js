function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("Ingrese un monto de dinero");
	descuento=prompt("Ingrese el porcentaje de descuento");

	precioFinal=(descuento*precio)/100

	document.getElementById('elPrecioFinal').value=precioFinal;


}
