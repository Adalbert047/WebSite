let personas = [];



function mostrarPersona()
{
    console.log("Mostrar Personas")
    let texto = "";
    for(let persona of personas){
        texto  += `<li>${persona.nombre} ${persona.nombre}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}


function agregarPersona()
{
    form = document.forms['forma']
    console.log("Agregando Persona")
    nombre = forma['nombre']
    apellido = forma['apellido']
    if(nombre.value != "" && apellido.value)
    {
        persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
    
        mostrarPersona()
    }
    else
    {
        alert("Cadenas Incompletas");
    }


}