/*Comentarios en JS*/



/*Ejemplos de tipos de datos en JS*/
var nombre = "Adal";
console.log(mi_nombre);


var numero = 1;
console.log(numero);

//Objecto
var object = {
    nombre : "Juan", 
    apellido : "Amaya",
    telefono : 9331110982
}

var apellido = object.apellido;

console.log(object.apellido);
console.log(typeof object.apellido);

/*Funciones*/
function mi_nombre(nombre)
{
    return nombre;
}

console.log(mi_nombre(nombre));

/*Clases*/
class Persona{
    constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

clientes = new Persona("Fernando", "Carlos");
console.log(clientes.apellido);

var autos = ["Audi", "BWM"];

/*Sintaxis similar a C++ y C#*/ 
for(var i = 0; i < autos.length; i++)
{
    console.log(autos[i]);
}


var string = "Hola"
var string_2 = "Mundo"

var string_completo = string + " " + string_2;
console.log(string_completo);