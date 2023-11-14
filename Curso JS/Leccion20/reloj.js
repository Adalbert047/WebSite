const mostrarReloj = () => 
{
    let fecha = new Date()
    let hr = fecha.getHours()
    let min = fecha.getMinutes()
    let secon = formatoHora(fecha.getSeconds())

    document.getElementById('hora').innerHTML = `${hr}:${min}:${secon}`

    const meses = ['Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    const dias = ['Lun', 'Mart', 'Mier', 'Jueve', 'Vier', 'Sab', 'Dom']


    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate()
    let mes = meses[fecha.getMonth()]


    let Fecha = `${diaSemana}, ${dia} ${mes}`


    document.getElementById('fecha').innerHTML = Fecha;
    document.getElementById('contenedor').classList.toggle('animar')
}

const formatoHora = (hora) => 
{
    if(hora < 10)
    {
        hora = '0' + hora;
    }    
    return hora
}
setInterval(mostrarReloj, 1000);