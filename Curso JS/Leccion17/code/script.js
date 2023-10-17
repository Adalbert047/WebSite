btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let a = document.getElementById("a");
    let b = document.getElementById("b")
    let resultado = parseInt(a.value) + parseInt(b.value)
    
    document.getElementById("resultado").innerHTML = "Resultado : " + resultado;


    console.log(resultado);

    

})
