btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let a = document.getElementById("a");
    let b = document.getElementById("b")
    let resultado = parseInt(a.value) + parseInt(b.value)
    

    if (isNaN(resultado))
    {
        document.getElementById("resultado").innerHTML = "El resultado no es numerico";
    }
    else
    {
        document.getElementById("resultado").innerHTML = "Resultado : " + resultado;
    }
    
})
