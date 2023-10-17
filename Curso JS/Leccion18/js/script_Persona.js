class Persona
{
    constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;

        
    }
    get Nombre() {return this.nombre}
    get Apellido() {return this.apellido}
    set Nombre(nombre) {this.nombre = nombre}
    set Apellido(apellido) {this.apellido = apellido}

}