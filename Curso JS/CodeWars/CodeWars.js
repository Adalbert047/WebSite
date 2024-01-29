function restaLista(a, b)
{
    var list = []

    a.map( (e, index) => e - b[index]) 

    list
}


console.log(restaLista([1,2,2,3,4,5], [2]))