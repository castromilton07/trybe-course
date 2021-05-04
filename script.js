/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;
*/

const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

divDois.className = 'techa';


// Ex. 2 e 2.1
function addClassTech(event) {
    if (event.target.id === 'divUm') {
        event.target.className = 'tech';
        divDois.removeAttribute('class');
        divTres.removeAttribute('class');
    }
    if (event.target.id === 'divDois') {
        event.target.className = 'tech';
        divUm.removeAttribute('class');
        divTres.removeAttribute('class');
    }
    if (event.target.id === 'divTres') {
        event.target.className = 'tech';
        divUm.removeAttribute('class');
        divDois.removeAttribute('class');
    }
    
}
divUm.addEventListener('click', addClassTech);
divDois.addEventListener('click', addClassTech);
divTres.addEventListener('click', addClassTech);

// Ex. 3
// Opção 1 - Utilizando Atributo via HTML OnInput
/*input.setAttribute('oninput', 'editClassTech()');
function editClassTech() {
    let value = document.getElementById('input').value;
    if (value !== null) {
        let verifyClassTech = document.getElementsByClassName('tech')[0];
        verifyClassTech.innerHTML = value;
    }
}*/
// Opção 2 - Utilizando o Escultador de Eventos (EventListener)
function editClassTech(event) {
    if (event.target.value !== null) {
        let verifyClassTech = document.getElementsByClassName('tech')[0];
        verifyClassTech.innerHTML = event.target.value;
    }
}
input.addEventListener('input', editClassTech);

// Ex. 4 e 4.1
function redirectToUrl(event) {
    location.href = "https://github.com/castromilton07";
}
myWebpage.addEventListener('dblclick', redirectToUrl);

// Ex. 5
function changeColorOver(event) {
    event.target.style.color = 'rgb(46, 193, 140)';
}
function changeColorOut(event) {
    event.target.style.color = 'rgb(255, 255, 255)';
}
myWebpage.addEventListener('mouseover', changeColorOver);
myWebpage.addEventListener('mouseout', changeColorOut);

// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
    // O Event é passado como um parâmetro para a função.
    if (event.target.id === 'divUm') {
        event.target.innerText = 'Aqui está a primeira tecnologia que mais gostei.';
    }
    if (event.target.id === 'divDois') {
        event.target.innerText = 'Aqui está a segunda tecnologia que mais gostei.';
    }
    if (event.target.id === 'divTres') {
        event.target.innerText = 'Aqui está a terceira tecnologia que mais gostei.';
    }
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}
divUm.addEventListener('dblclick', resetText);
divDois.addEventListener('dblclick', resetText);
divTres.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.