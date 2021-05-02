/*
    Exercícios
    1. Crie um irmão para elementoOndeVoceEsta.
    2. Crie um filho para elementoOndeVoceEsta.
    3. Crie um filho para primeiroFilhoDoFilho.
    4. A partir desse filho criado, acesse terceiroFilho.

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

// Ex. 01
let irmao = document.createElement('div');
irmao.id = 'quintoFilho';
console.log(document.querySelector('#pai').appendChild(irmao));

// Ex.02
let filho01 = document.createElement('div');
filho01.id = 'terceiroFilhoDoFilho';
console.log(document.querySelector('#elementoOndeVoceEsta').appendChild(filho01));

// Ex.03
let filho02 = document.createElement('div');
filho02.id = 'filhoDoPrimeiroFilho';
console.log(document.querySelector('#primeiroFilhoDoFilho').appendChild(filho02));

// Ex. 04
console.log(document.querySelector('#filhoDoPrimeiroFilho').parentElement.parentElement.nextElementSibling);