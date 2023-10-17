let personas = [
    new Persona('Juan', 'Kaka'),
    new Persona('Lara', 'Perez')
];


mostrarPersonas()
{
    let texto = "";

    for (let x in personas)
    {
        console.log(x);
    }


}

