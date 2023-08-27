class Persona {


    
    constructor(nombre, apellido, email, edad, sexo)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = "";
    }

    get nombreCompleto () {return "Nombre: " + this.nombre + " Apellido: " + this.apellido}
    set EstadoCivil (estadoCivil) { this.estadoCivil = estadoCivil; }


    AñosaFuturo = function(n) 
    {
        return this.edad + n;
    }
}


let Yo = new Persona("Adal", "Amaya", "aadalberto@gmail.com" , 19, "M");


console.log(Yo.nombre);
console.log(Yo.nombreCompleto);

console.log(Yo.estadoCivil);

/*Se ven como metodos pero se trata sin los parentesis */
Yo.EstadoCivil = "Casado";
console.log(Yo.estadoCivil);

console.log(Yo.AñosaFuturo(5));