/*
    Exercícios
    1 .Acesse o elemento elementoOndeVoceEsta.
    2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
    3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
    4. Acesse o primeiroFilho a partir de pai.
    5. a) Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
    5. b) Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
    6. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
    7. Agora acesse o terceiroFilho a partir de pai.

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

// Ex, 01 - Todas Alternativas Possíveis
console.log(document.querySelector('#elementoOndeVoceEsta'));
console.log(document.querySelector('#primeiroFilhoDoFilho').parentElement);
console.log(document.querySelector('#pai').children[1]);
console.log(document.querySelector('#pai').firstElementChild.nextElementSibling);
console.log(document.querySelector('#pai').lastElementChild.previousElementSibling.previousElementSibling);
console.log(document.querySelector('#primeiroFilho').nextElementSibling);
console.log(document.querySelector('#terceiroFilho').previousElementSibling);

// Ex. 02
console.log(document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'red');

// Ex. 03
console.log(document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerHTML = 'Primeiro Filho do Filho');

// Ex. 04
console.log(document.querySelector('#pai').firstElementChild);

// Ex.05 a)
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

// Ex.05 b)
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

// Ex. 06
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// Ex. 07
console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

