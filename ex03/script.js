// let pilotosDeF1 = document.getElementsByClassName('piloto-f1-atual')[0].innerText = 'Stroll';

let pilotosDeF1 = document.getElementsByClassName('piloto-f1-atual');

for (let index in pilotosDeF1) {
    pilotosDeF1[index].innerText = "Lewis Hamilton";
}