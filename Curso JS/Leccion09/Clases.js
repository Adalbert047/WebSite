class Persona {    

    //Atributo propio de la clase
    static contadorPersona = 0;

    //Atributo de los objetos
    num_Casa = 0;


    constructor(nombre, apellido, email, edad, sexo)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = "";

        //Se utiliza la clase en el dado caso que queramos usar una variable de la clase
        this.Id_Persona = ++Persona.contadorPersona;
    }

    get nombreCompleto () {return "Nombre: " + this.nombre + " Apellido: " + this.apellido}
    set EstadoCivil (estadoCivil) { this.estadoCivil = estadoCivil; }
    set Num_Casa (x) {this.num_Casa = x}


    AñosaFuturo = function(n) 
    {
        return this.edad + n;
    }

    toString()
    {
        return "ID: " + this.Id_Persona + " Nombre: " + this.nombreCompleto + ", Edad : " + this.edad + ", Sexo : " + this.sexo;
    }
    static saludar()
    {
        return "Hola";
    }
    static saludar2(Persona)
    {
        return "Hola" + Persona.nombreCompleto;
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

    //Metodo exclusivo de la clase, no de los objetos de la clase



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



Persona.saludar2(Yo);
Persona.saludar();

Empleado.saludar()
Empleado.saludar2(empleadin);

//Atributo exclusivo de la clase
console.log(Persona.contadorObjetosPersona);


let empleadin2 = new Empleado("Koka", "cji", "dwadw@email.com", 21, "M", "Recursos Humanos");

console.log(Persona.contadorObjetosPersona);

console.log(empleadin.num_Casa);

empleadin.Num_Casa = 25;

console.log(empleadin.num_Casa);

console.log(empleadin2.Id_Persona);

