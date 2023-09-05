class DispositiEntrada
{
    constructor(tipoEntrada, marca)
    {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;

    }

    get TipoEntrada () {return this.tipoEntrada}
    set TipoEntrada (tipoEntrada) {this.tipoEntrada = tipoEntrada}

    get Marca () { return this.marca}
    set Marca(marca) {this.marca = marca}

}

class Raton extends DispositiEntrada
{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca)
    {
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    toString()
    {
        return  `tipoEntrada: ${this.tipoEntrada}, Marca: ${this.marca}, Id Raton: ${this.idRaton}`;
    }
}


class Teclado extends DispositiEntrada
{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca)
    {
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclado;
    }

    toString()
    {
        return  `tipoEntrada: ${this.tipoEntrada}, Marca: ${this.marca}, Id Teclado: ${this.idTeclado}`;
    }
}



class Monitor
{
    static contadorMonitores = 0;
    constructor(marca, tamaño)
    {
        this.idMonitor = ++ Monitor.contadorMonitores;
        this.marca = marca;
        this.tamaño = tamaño;
    }

    get IdMonitor() {return this.idMonitor}

    get Marca () { return this.marca}
    set Marca(marca) {this.marca = marca}

    get Tamaño () {return this.tamaño}
    set Tamaño (tamaño) {this.tamaño = tamaño}

    toString()
    {
        return  `Id Monitor: ${this.idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamaño}`;
    }

}

class Computadora
{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton)
    {
        this.idComputadora  = ++Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor.toString();
        this.teclado = teclado.toString();
        this.raton = raton.toString();
    }

    get IdComputadora() {return this.idComputadora}

    get Nombre() {return this.nombre}
    set Nombre(nombre) {this.nombre = nombre}

    get Monitor () {return this.monitor}
    set Monitor (monitor) {this.monitor = monitor.toString()}


    get Teclado () {return this.teclado}
    set Teclado (teclado) {this.teclado = teclado.toString()}

    get Raton () {return this.raton}
    set Raton (raton) {this.raton = raton.toString()}




    toString()
    {
        return `Computadora ${this.idComputadora}, Nombre: ${this.nombre}\n [ Monitor: ${this.monitor}, Teclado${this.teclado}, Raton ${this.raton}]`;
    }

}

class Orden
{
    static contadorOrdenes = 0;
    constructor()
    {
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadores = []
    }

    agregarComputadora(computadora)
    {
        this.computadores.push(computadora);
    }

    mostrarOrden()
    {

        let cadena = `Orden, Id Orden: ${this.idOrden} \n`;
        for(let computer of this.computadores)
        {
            cadena += "" + computer.toString() + "\n";
        }
        return cadena;
    }
}


let Logitech305 = new Raton("Salida y Entrada", "Logitech");
let Hyper = new Raton("Salida y Entrada", "Hyper");
let VSG = new Teclado("Salida y Entrada", "VSG");
let Razer = new Teclado("Salida y Entrada", "Razer");
let MSI = new Monitor("Monitor MSI", 23);


console.log(Logitech305.toString());
console.log(VSG.toString());
console.log(Razer.toString());
console.log(MSI.toString());




let Computadora1 = new Computadora("PC GAMER", MSI, VSG, Logitech305);
let Computadora2 = new Computadora("PC GAMER 2", MSI, VSG, Hyper);
console.log(Computadora1.Monitor);
console.log(Computadora1.Raton);
console.log(Computadora1.Teclado);


Computadora1.Teclado = Razer;

console.log(Computadora1.Teclado);


console.log(Computadora1.toString())



let PrimeraOrden = new Orden();

PrimeraOrden.agregarComputadora(Computadora1);


console.log(PrimeraOrden.mostrarOrden());

PrimeraOrden.agregarComputadora(Computadora2);

console.log(PrimeraOrden.mostrarOrden());

let SegundaOrden = new Orden();

SegundaOrden.agregarComputadora(Computadora2);
SegundaOrden.agregarComputadora(Computadora1);

console.log(SegundaOrden.mostrarOrden());