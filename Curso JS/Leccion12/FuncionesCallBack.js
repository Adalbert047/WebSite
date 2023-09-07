function Imprimir(mensaje)
{
    console.log(mensaje);
}

function Funcion2(x, b, Imprimir)
{
    let res = x + b;

    Imprimir("Resultado," + res)
}


Funcion2(10,5, Imprimir);


function miFuncionCallBack()
{
    console.log("Saludos");
}

//Uso de la funcion setTimeOut
setTimeout(miFuncionCallBack, 50000);

let reloj = () => {
    let fecha = new Date();
    console.log("Horas: "  +fecha.getHours() + " Minutos: " + fecha.getMinutes() + " Segundo: " + fecha.getSeconds());
}


//setInterval(reloj, 1000);

