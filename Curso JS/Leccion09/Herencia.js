class Persona
{
    static contadorPersonas = 0;

    constructor(nombre, apellido)
    {
        this.idPersona = ++Persona.contadorPersonas;
        this.nombre = nombre;
        this.apellido = apellido;
        
         
    }


    get IDPersona() {return this.IdPersona}
    get Nombre() {return this.nombre}
    set Nombre(nombre) {this.nombre = nombre}
    get Apellido() {return this.apellido}
    set Apellido(apellido) {return this.apellido = apellido}
    get Edad() {return this.Edad}
    set Edad(edad) {this.Edad = edad}
    toString() {return "IdPersona : " + idPersona + ", Nombre: " + this.nombre + ", Apellido: " + this.apellido + ",Edad " + this.apellido}
}

class Empleado extends Persona
{
    constructor(nombre, apellido, sueldo)
    {
        super(nombre, apellido);
        this.nombre = nombre;
        this.apellido = apellido;
        this.idEmpleado++;
        this.sueldo = sueldo;
    }

    get IdEmplead() {return this.idEmpleado}
    get Sueldo() {return this.sueldo}
    set Sueldo(sueldo) { this.sueldo = sueldo}

    toString() {return toString() + ", IDEmpleado " + this.idEmpleado + ", Sueldo " + this.sueldo}
}


class Cliente extends Persona
{
    constructor(nombre, apellido)
    {
        super(nombre, apellido);
        this.nombre = nombre;
        this.apellido = apellido;
        this.idCliente++;
        this.fechaRegistro = new Date();
    }

    get IDCliente() {return this.idCliente}
    get FechaRegistro() {return this.fechaRegistro}
    

    toString() {return toString() + ", IdCliente " + this.idCliente + ", Fecha de Registro " + this.fechaRegistro}
}

console.log("AHOAD")

let Personita = new Persona("Adal", "Amaya");

let Empleadin = new Empleado("BETO", "Amaya", 1500);

let Clientin = new Cliente("LOOO", "kekakak");


console.log(Clientin.FechaRegistro);

console.log(Persona.contadorPersonas);