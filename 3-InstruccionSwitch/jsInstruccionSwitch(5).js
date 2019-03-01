function mostrar()
{
 var hora;
 var mensaje;

 hora=document.getElementById('hora').value;

 hora=parseInt(hora);

 switch(hora)
 {
 	case 7:
 	case 8:
 	case 9:
 	case 10:
 	case 11:

 	mensaje="Es de mañana"

 	break;
 }
alert(mensaje)



}//FIN DE LA FUNCIÓN