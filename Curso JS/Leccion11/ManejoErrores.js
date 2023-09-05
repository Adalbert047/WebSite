'use strict'


try
{
    let x = 10;
    //x = 10;
}
catch(error) 
{
    console.log(error);
}
finally
{
    console.log("Termina la revision de errores");
}

console.log("Continuamos ");


function ComprobarNumero(x)
{

    try
    {
        if(x < 10)
        {
            console.log("Es menor a 10");
        }
        else if (x > 10)
        {
            console.log("Es mayor a 10");
        }
        else
        {
            throw "Error, el dato insertado no es numerico";
        }
    }
    catch(error)
    {
        console.log(error);
    }
}


ComprobarNumero("Hola");