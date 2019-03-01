
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingrese ancho del rectangulo");
	largo=prompt("Ingrese largo del rectangulo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2

	alert("El perimetro es de "+perimetro);
}
