let  forma = document.getElementById('forma');

forma.addEventListener('focus', (evento) =>{
    evento.target.style.backgroud = "yellow";


}, true);


forma.addEventListener('blur', (evento) =>{
    evento.target.style.backgroud = '';
}, true)