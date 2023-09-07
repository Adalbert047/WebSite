miFuncion();

function miFuncion()
{
    console.log("Saludos");
}

//No aplica el uso de la funcion sin haberlo definido.

let miFuncionFlecha = () => console.log("holis");

miFuncionFlecha()


console.log(typeof(miFuncionFlecha));

const regresaObjeto = () => ({nombre : 'Juan', apellido : 'LAra'})
console.log(typeof(regresaObjeto));