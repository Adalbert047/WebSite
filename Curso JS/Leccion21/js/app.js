const ingresos = [
    new Ingreso('Salario', 100),
    new Ingreso('Venta de Coche', 1500)
]


const egresos = [
    new Egreso('Renta', 2000),
    new Egreso('Ropa', 500)
]


let cargarApp = () => 
{
    cargarCabecero()
}


let cargarCabecero = () => 
{
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = totalEgresos() / totalIngresos()


    console.log(presupuesto);

    document.getElementById("presupuesto").innerHTML = presupuesto;
    document.getElementById("porcentaje").innerHTML = porcentajeEgreso;
    
    document.getElementById("ingresos").innerHTML = totalIngresos();
    document.getElementById("egresos").innerHTML = totalEgresos();

}

let totalEgresos = () => 
{
    let totalEgreso = 0;
    for(let egre of ingresos)
    {
        totalEgreso += egre.valor
    }

    return totalEgreso
}

let totalIngresos = () => 
{
    let totalIngreso = 0;
    for(let ing of egresos)
    {
        totalIngreso += ing.valor
    }

    return totalIngreso
}