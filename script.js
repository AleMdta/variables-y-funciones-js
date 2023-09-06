//Alerta en una ventana emergente
alert("Hola Mundo");

//Declaración e inicialización de variables
var frasco = "pastillas";
var frasco = "mermelada";
var frasco = "chiles jalapeños";

//Impresión de datos
// console.log(frasco);

/*
Para nombrar variables se utiliza la convención Camel Case (upper and lower)
Tipos de Datos:
    -Primotivos
        -String
        -Number
        -Boolean
        -Undefined
        -Symbol

    -No primitivos
        -Object
*/

//Esto es una cadena de texto (string)
var vaso = "leche";

//Esto es una dato tipo number
var unNumero = 26;

//Esto es un dato tipo boolean
var unBoleano = true;
var otroBoleano = false;

//Esto es un tipo de dato undefined  - no está definido, se declara para no está inicializado ya que no se sabe qué va a contener, se llenará después, por ejemplo si alguien agenda una cita, no sabemos si se va a agendar o no.
var cita = undefined;

//Valor nulo- null, es un valor que no tenemos pero declaramos.
var asistencia = null;

//Por si quieres saber el tipo de dato
console.log(typeof(cita));

/* 
"var" es una variable con alcance global. (tiene mayor alcance, puede leerse desde cualquer parte del código, es loa más antigua)

"let" es una variable de alcance local (solo se utiliza dentro de un bloque de código)

"const " es un dato que permanece constante, que no se puede modificar posterioemente en el código.
*/

var edad = "26";
var num = 12;

//Para convertir un número a string. (var nombreNuevaVariable = variable.toString();)
var numCadena = num.toString();