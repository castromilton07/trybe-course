let querySelecDona = document.querySelector('#Dona');
querySelecDona.innerText = 'Midia Liberdade';
let querySelecP = document.querySelector('.pilotos-sem-titulo p');
querySelecP.innerHTML += ' [The Tallest]';
let querySelecSemTituloF1 = document.querySelector('.pilotos-sem-titulo .piloto-f1-atual');
querySelecSemTituloF1.innerHTML += ' [The Famous]';

document.querySelector('.pilotos-sem-titulo span').innerHTML += ' [The Fastest]';
document.querySelectorAll('.pilotos-com-titulo p')[0].innerHTML += ' [The Legend]';