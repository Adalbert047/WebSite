class Orden
{
    

    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {return 5}

    constructor()
    {
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    
    }


    get IDOrden()
    {
        return this.idOrden;
    }

    mostrarOrden()
    {
        let Cadena = " [";

        for(let producto of this.productos)
        {
            Cadena += producto.toString() + " , ";
        }

        Cadena += "]  "

        return `IdOrden: ${this.idOrden}, Venta Total: ${this.CalcularTotal()}, Productos : ${Cadena}`
    }

    agregarProducto(producto)
    {
        if(this.productos.length < Orden.MAX_PRODUCTOS)
        {
            this.productos.push(producto);

        }
        else
        {
            return "No se puede agregar mas productos";
        }
    }

    CalcularTotal()
    {
        let totalVenta = 0;

        for(let producto of this.productos)
        {
            totalVenta += producto.precio;
        }

        return totalVenta;
    }


    toString()
    {
        return `IdProducto: ${this.IdProducto}, nombre: ${this.nombre}, precio: ${this.precio}`;
    }
 
    


}


class Productos
{

    static ContadorProductos = 0;


    constructor(nombre, precio)
    {

        this.nombre = nombre;
        this.precio = precio;
        this.idProducto = ++Productos.ContadorProductos;
    }

    ProductoInfo()
    {
        return "Nombre del producto: " + this.nombre + ", Precio: " + this.precio;
    }

    Producto(nombre, precio)
    {
        this.nombre = nombre;
        this.precio = precio;
    }

    get IdProducto() {return this.idProducto}
    get Nombre() {return this.nombre}
    set Nombre(nombre) {this.nombre = nombre}
    get Precio() {return this.precio}
    set Precio(precio) {this.precio = precio}
    toString() {
        return "IdProducto :" + this.idProducto + ", Nombre: " + this.nombre + ", Precio: " + this.precio
    } 
}



let Cereal = new Productos("Trix", 150);
let Jabon = new Productos("Jamon parmesano", 20);


console.log(Cereal.toString());

console.log(Jabon.Precio)


console.log(Productos.ContadorProductos);



let Orden1 = new Orden();

Orden1.agregarProducto(Cereal);
Orden1.agregarProducto(Jabon);
Orden1.agregarProducto(Cereal);
Orden1.agregarProducto(Jabon);
Orden1.agregarProducto(Cereal);


console.log(Orden1.mostrarOrden());