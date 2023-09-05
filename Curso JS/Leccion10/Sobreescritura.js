class Empleado
{
    constructor(nombre, sueldo)
    {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }


    obtenerDetalles()
    {
        return  `Empleado :Nombre:  ${this.nombre}, Sueldo: ${this.sueldo}`;
    }
}


class Gerente extends Empleado
{
    constructor(nombre, sueldo, departamento)
    {
        super(nombre, sueldo);
        this.departamento = departamento;
    }


    obtenerDetalles()
    {
        return `Dato del Gerente: \nDepartamento: ${this.departamento}, ${super.obtenerDetalles()}`;
    }
}


class SubGerente extends Empleado
{
    constructor(nombre, sueldo)
    {
        super(nombre, sueldo);
    }
}

function Imprimir(x)
{
    console.log(x.obtenerDetalles());
}
//Recuerda usar super para el uso de metodos de la clase padre o clase heredada
let gerente1 = new Gerente("Adal", 200000, "licenciado");
let empleado1 = new Empleado("Nando", 10);
let subgerente1 = new SubGerente("Beitot", 100)

console.log(empleado1.obtenerDetalles());
console.log(gerente1.obtenerDetalles());



Imprimir(subgerente1);


