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

    toString()
    {
        return this.nombreCompleto + ", Edad : " + this.edad + ", Sexo : " + this.sexo;
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



/*Herencia en JS*/

class Empleado extends Persona
{
    constructor(nombre, apellido, email, edad, sexo, departamento)
    {
        /*Se debe pasar los parametros de la clase hija en super*/
        super(nombre, apellido, email, edad, sexo);
        this.departamento = departamento;

    }

    get Departamento (){
        return this.departamento;
    }

    set Departamento(departamento) {
        this.departamento = departamento
    }

    /*Sobreescritura en JS*/

    //Sigue siendo similar a C#
    get nombreCompleto()
    {
        return super.nombreCompleto + ", Departamento: " + this.departamento;
    }


    toString()
    {
        return super.toString() + ", Departamento: " + this.departamento;
    }


    /*Con 'super' se puede llamar los valores, metodos y propiedades de la clase padre para su uso en la clase hijo*/
}


let empleadin = new Empleado("Juanito", "Fulanito", "juanuto@email.com", 20, "M", "Recursos Humanos");


console.log(empleadin.Departamento);
empleadin.Departamento = "Psicologia";

console.log(empleadin.Departamento);

empleadin;


console.log(empleadin.AñosaFuturo(5));
console.log(empleadin.nombreCompleto);



/*Polimorfismo, se llama cuando un objeto llama el metodo de una clase padre
  (Multiple formas en tiempo de ejecucion)*/
console.log(empleadin.toString());