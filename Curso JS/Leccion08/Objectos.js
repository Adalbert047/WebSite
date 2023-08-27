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


/*El uso de constructores en JS */


/*Funcion constructor*/
/*Uso de fuction como constructor*/


function Persona(nombre, apellido, email)  
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    /*Forma de agregar un metodo en un constructo*/
    this.miNombreCompleto = function() {
        return "Nombre: " + this.nombre + ", Apellido: " + this.apellido;
    }
}

let PrimerUsuario = new Persona("Adal", "Amaya", "aadalberto@");
let SegundoUsuario = new Persona("Betito", "Juanito", "Betito@");

console.log(PrimerUsuario.miNombreCompleto());
console.log(SegundoUsuario.miNombreCompleto());
console.log(typeof(Persona));

/*Forma de crear objetos en js */
let miObjeto = new Object();
/*Forma simplificada*/
let miObjecto2 = {}

let miFuncion = new Function();
/*Forma simplificada*/
let miFuncion2 = function() {}



/*Uso de prototype en JS*/

let Padre = new Persona("Joel", "Amatya", "adawdaw@");

/*Forma de crear propiedades a un objeto*/
Persona.prototype.sexo = "Indefinido";

console.log(Padre.sexo);
Padre.sexo = "Masculino";
console.log(Padre.sexo);


console.log(PrimerUsuario.sexo);
PrimerUsuario.sexo = "Elle";
console.log(PrimerUsuario.sexo);


let Futbolista = {
    nombre : "Cristinao", 
    apellido : "Santos",
    nombre_Completo : function(titulo, rol) { return "titulo: " + titulo + " rol: " + rol + " " +  this.nombre + " " + this.apellido }
}

let Tennista = {
    nombre : "Messi", 
    apellido : "Cucini",
}

console.log(Futbolista.nombre_Completo("Licenciado", "loka"));
/*Permite el llamado de otro metodo que tiene la misma estructura de otro objeto*/
//Permite mandar parametros pero este no debe ponerse con this.
console.log(Futbolista.nombre_Completo.call(Tennista, "GRANDE", "tenista"));


/*Uso de apply*/


array = ["Ing", "KOKO"];
/*Tiene el mismo efecto que call, solo que se debe pasar mediante un arreglo*/
console.log(Futbolista.nombre_Completo.apply(Tennista, array));