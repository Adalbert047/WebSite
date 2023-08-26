let numero = 5;
let numero_2= 10;


console.log(numero + numero_2);

/*Presedencia en JS*/

let z = numero + numero_2;

console.log(z);



/*Operador Tenario*/



/*Permite tener como variable una condicion */
let resultado = 3>2 ? "Verdadero": "Falso";
console.log(resultado);

let num = 9;
let resultad = (num % 0 == 0) ? "Par" : "Impar";
console.log(resultad);

/** Convertir string a number en JS*/


let number = "20x";

let edad = Number(number);
/** */
console.log(typeof(edad));


/*Operador Ternario*/resultado = edad > 18 ? "Es mayor" : "Es menor";

console.log(resultado);


/*Metodo IsNotaNumber* */
if (isNaN(edad))
{
    console.log("No es un numero");
}
else
{
    console.log("Si es un numero")
}


let x = 5;
let y = 10;
z = ++x + y--


console.log(z);

let horario = 1;


if (horario > 5 && horario < 12)
{
    resultado = "Buenos dias";
}
else if (horario > 11 && horario < 19)
{
    resultado = "Buenas Tardes";
}
else if (horario > 18 && horario < 25)
{
    resultado = "Buenas noches";
}
else if (horario >= 0 && horario <= 6)
{
    resultado = "Durmiendo"
}
else if (horario >= 26)
{
    resultado = "El horario es incorrecto";
}

console.log(resultado);


/*Sintaxis de Swicht Case en JS*/



horario = 12;

switch (horario)
{
    case horario > 0:
        resultado = "Buenos dias";
        break;
    case (horario > 11 && horario < 16):
        resultado = "Buenas Tardes";
        break;
    case (horario > 17 && horario < 23):
        resultado = "Buenas noches";
        break;
    default:
        resultado = "No se encontro ningun horario"
        break;
}

console.log(resultado);




/*Ciclos*/

for (let i = 0; i < horario; i++)
{
    console.log(i);
    if (i % 2 == 0)
    {
        console.log(i);
    }
}



let autos = [4,3,2,1];
let j = autos.length;


for (let i = 0; i < horario; i++)
{

    autos.push(i);
}

console.log(autos);
console.log(autos[3]);


console.log(autos);
console.log(autos instanceof Object);

console.log(Array.isArray(x));
console.log(Array.isArray(autos));


/***/

function miFuncion(a, b)
{
    return a + b;
}

console.log(miFuncion(10,5));


/*Declaracion Funcion de tipo de expresion */
let fuct = function(a, b){return a + b};




resultado = fuct(10, 5);

console.log(resultado);


/*Funcion de un solo llamado*/

(function (){
    console.log("Ejecutando la funcion");
})();

var miFuncionTexto = fuct.toString();

console.log(miFuncionTexto);