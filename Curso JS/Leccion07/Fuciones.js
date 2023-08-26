/*Expresion en Funcion Flecha*/



const sumarFunction = (a, b) => a + b;



let resultado = sumarFunction(10, 5);


console.log(sumarFunction(10,5));


/*Parametros y Argumentos*/

/*Se puede declarar de forma predeterminada estos valores */
const funct = (a = 10, b = 15) => a + b;

/*Tambien las funciones en js son flexibles
Se sobreescribe los parametros asignados cuando se llama sobre
los predeterminados*/
sumar = funct(5);

console.log(sumar);


resultado = sumarTodo(5, 5);

console.log(resultado);

function sumarTodo()
{
    let suma = 0;
    let inte = 0;

    for(var i = 0; i < arguments.length; i++)
    {
        inte++;
        suma += arguments[i];
        if (inte == 2)
        {
            suma *= 2;
            inte = 0;
        }
        
    }
    return suma;
}

/*Paso por valor*/

let x = 10;

function cambiarValor(a)
{
    a = 20;
}

cambiarValor(x);
console.log(x);

/*Paso por referencia*/

let person = {
    nombre : "Juan",
    apellido : "Loca"
}

let cliente = {
    nombre : "Kola",
    apellido : "Nene"
}

function cambiarValor(a, b)
{
    a.nombre = "Jola";
    a.apellido = "Kola";
}

cambiarValor(person, cliente);


console.log(person);











