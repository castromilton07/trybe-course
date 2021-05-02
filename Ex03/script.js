/*
    Exercícios
    1. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

    Recordando!
    parentNode : retorna o nó pai.
    parentElement : retorna o elemento pai.
    childNodes : retorna um HTMLCollection com todos os nós filhos.
    children : retorna um HTMLCollection com todos os elementos filhos.
    firstChild : retorna o primeiro nó filho.
    firstElementChild : retorna o primeiro elemento filho.
    lastChild : retorna o último nó filho.
    lastElementChild : retorna o último elemento filho.
    nextSibling : retorna o próximo nó.
    nextElementSibling : retorna o próximo elemento.
    previousSibling : retorna o nó anterior.
    previousElementSibling : retorna o elemento anterior.
*/

// Comandos Pré-Existentes:
let irmao = document.createElement('div');
irmao.id = 'quintoFilho';
console.log(document.querySelector('#pai').appendChild(irmao));
let filho01 = document.createElement('div');
filho01.id = 'terceiroFilhoDoFilho';
console.log(document.querySelector('#elementoOndeVoceEsta').appendChild(filho01));
let filho02 = document.createElement('div');
filho02.id = 'filhoDoPrimeiroFilho';
console.log(document.querySelector('#primeiroFilhoDoFilho').appendChild(filho02));

// Ex. 01
console.log(document.querySelector('#primeiroFilhoDoFilho').removeChild(filho02));

let terceiroFilhoDoFilho = document.querySelector('#terceiroFilhoDoFilho');
console.log(document.querySelector('#elementoOndeVoceEsta').removeChild(terceiroFilhoDoFilho));

let segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');
console.log(document.querySelector('#elementoOndeVoceEsta').removeChild(segundoEUltimoFilhoDoFilho));

let quintoFilho = document.querySelector('#quintoFilho');
console.log(document.querySelector('#pai').removeChild(quintoFilho));

let quartoEUltimoFilho = document.querySelector('#quartoEUltimoFilho');
console.log(document.querySelector('#pai').removeChild(quartoEUltimoFilho));

let terceiroFilho = document.querySelector('#terceiroFilho');
console.log(document.querySelector('#pai').removeChild(terceiroFilho));

let primeiroFilho = document.querySelector('#primeiroFilho');
console.log(document.querySelector('#pai').removeChild(primeiroFilho));