function mostrar()
{
	var precio;
	var descuento;
	var iva;

	precio=document.getElementById('elNombre').value;

	descuento=precio *0.90

	iva=descuento * 1.21

	document.getElementById('elNombre').value=precio;

	alert("Tu compra es de $" +precio+ " tenes un descuento del 10% queda en $"+descuento+ " ,más el IVA es de $"+iva);
}
