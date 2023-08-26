let persona = {
    nombre : "Juanito",
    apellido : "Lola"
}


console.log(typeof(persona));


let cliente = {
    nombre : "KOla",
    apellido : "Junaito",
    nombre_Completo : function() { return this.nombre + " " + this.apellido }
}

console.log(persona);

console.log(cliente.nombre_Completo());


function Cambio( x, b )
{
    x.nombre = b.nombre;
    x.apellido = b.apellido;
}


Cambio(persona, cliente);
console.log(persona);


/*Creacion de un nuevo objecto en memoria vacio*/
persona = new Object
{
    /*Asignacion de propiedades */
    persona.nombre = "Adal",
    persona.nombre = "Amaya"
    persona.Direccion = "Calle 13-A"

    persona.Informacion = function() { return "Mi nombre es: " + this.nombre + "Apellido: " 
    + this.apellido + "Vivo en: " + this.Direccion}
}


console.log(persona.Informacion());


for(prop in persona)
{
    console.log(prop)
}


/*Agregando propiedades y eliminando propiedades en object*/

persona.nombre = "Edgar";

/*Creando un objecto*/
persona.telefo = 9331110823

/*Elimando propiedad con delete*/

delete(persona.Direccion)

persona




/*Metodo Values en Object */

/*Pasa las propiedades en un array */
let array = Object.values(persona);

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

console.log(typeof(array[0]));


/*El uso del metodo stringfy*/

/*Toda el objecto pasa a ser un solo string*/
let person_str = JSON.stringify(persona);

console.log(person_str)



/*Metodo Get y Set en JS*/
cliente = {
    nombre : "Juanito",
    apellido : "Kolaloka",
    edad : 28,
    idioma : "us",
    get nombreCompleto() { return this.nombre + " " + this.apellido},
    get lang() { return this.idioma.toUpperCase()},
    set lang( lang ) { this.idioma = lang.toUpperCase(); }
    
}

console.log(cliente.nombreCompleto);
/*get y set son propiedades*/

cliente.lang = "es";

console.log(cliente.idioma);
