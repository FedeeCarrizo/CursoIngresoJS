
function mostrar()
{
	var perrouno;
	var perrodos;
	var pesouno;
	var pesodos;
	var result;

	perrouno= prompt ("Nombre de la mascota");
	perrodos= prompt ("Nombre de la mascota");
	pesouno=prompt("Peso de la mascota");
	pesodos=prompt("Peso de la mascota");

	pesouno=parseInt (pesouno);
	pesodos=parseInt (pesodos);

	result = (pesouno + pesodos);

	alert("Tenes dos mascotas "+perrouno+" y "+perrodos+", que pesan "+pesouno+ " y "+pesodos +" kilos, la suma de los kilos es " + result);
}