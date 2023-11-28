const ingresos = [
    new Ingreso('Salario', 100),
]


const egresos = [
    new Egreso('Renta', 2000),
    new Egreso('Ropa', 500)
]


let cargarApp = () => 
{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}


let cargarCabecero = () => 
{
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = totalEgresos() / totalIngresos()


    console.log(presupuesto);

    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());

}

const formatoMoneda = (valor) => 
{
    return valor.toLocaleString('en-US', {style:'currency', currency: 'USD', minimunFractionDigits:2})
}

const formatoPorcentaje = (valor) => 
{
    return valor.toLocaleString('en-US', {style:'percent', minimunFractionDigits:2})
}

const cargarIngresos = () => 
{

    console.log("Cargando Ingreso")
    let ingresosHTML = '';
    for(let ingreso of ingresos)
    {
        console.log("Cargando cada ingreso")
        ingresosHTML += crearIngresoHTML(ingreso);

    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) =>
{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name='close-circle-outline' onclick ='eliminarIngreso(${ingreso.id})'></ion-icon>
                </button>
        </div>
    </div>
</div>`;

    return ingresoHTML;
}


const cargarEgresos = () => 
{
    
    console.log("Cargando Egresos")
    let egresosHTML = '';
    for(let egreso of egresos)
    {
        console.log("Cargando cada egresos")
        egresosHTML += crearEgresoHTML(egreso);

    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) =>
{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${egreso.valor}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalIngresos())}</div>
        <button class="elemento_eliminar--btn">
            <ion-icon name='close-circle-outline' onclick = 'eliminarEgreso(${egreso.id})'></ion-icon>
        </button>
    </div>
</div>
</div>`;

    return egresoHTML;
}


const eliminarIngreso = (id) => 
{
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero()
    cargarIngresos()
}

const eliminarEgreso = (id) => 
{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero()
    cargarEgresos()
}

let totalEgresos = () => 
{
    let totalEgreso = 0;
    for(let egre of egresos)
    {
        totalEgreso += egre.valor
    }

    return totalEgreso
}

let totalIngresos = () => 
{
    let totalIngreso = 0;
    for(let ing of ingresos)
    {
        totalIngreso += ing.valor
    }

    return totalIngreso
}