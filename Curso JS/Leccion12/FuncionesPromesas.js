//Recibe dos parametros de tipo CallBack

let miPromesa = new Promise((resolved, rejected) => {
    let expresion = false;
    if (expresion == true)
    {
        resolved('Resolvio correcto');
    }
    else
    {
        rejected('Se produjo un error');
    }
});


/*miPromesa.then(
    valor => console.log(valor), 
    error => console.log(error)
);
*/
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));


let promesa = new Promise((resolver) =>
{
    setTimeout(  ()=> resolver('saludos con promesa y timeout', 10000));
    console.log("Fin del setTimeout");
})

promesa.then(valor => console.log(valor));



//Async indica que una funciona regrese una promesa

async function miFuncionProemsa()
{
    return 'Saludos con promesa y async';
}

//Es otra forma, es una forma de retornar mas directa, solo que se debe utilizar parantesis
miFuncionProemsa().then(valor => console.log(valor));

//Async y Await



async function FuncionPromesa2()
{
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con Await');
    });


    console.log(await miPromesa)
}


//Hace el llamado de una funcion normal, await solo se puede usar dentro de una funcion declarado con async
FuncionPromesa2();


async function FuncionPromesa3()
{
    let miPromesa2 = new Promise(resolver => {
        setTimeout(() =>resolver('Promesa con await 2'), 1000);
    })

    console.log(await miPromesa2);
}

FuncionPromesa3();

