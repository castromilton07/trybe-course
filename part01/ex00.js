// Cria um Array e inicializa ele com 3 elementos;
let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// Acessa e exibe o tamanho/comprimento do Array 
console.log(taskList.length);

// Acessa e exibe o primeiro item do Array
let searchForFirstTask = taskList[0];
console.log(searchForFirstTask);

// Acessa e exibe o último itemo do Array
let searchForLastTask = taskList[taskList.length - 1];
console.log(searchForLastTask);

// Adiciona um item no fim do Array
taskList.push('Fazer exercícios da Trybe');
console.log(taskList);

// Adiciona um item no início do Array
taskList.unshift('Tomar uma ducha');
console.log(taskList[0]);

// Remove o último elemento do Array
taskList.pop();
console.log(taskList);

// Remove o primeiro elemento do Array
taskList.shift();
console.log(taskList);

// Consultar a posição/index de um item no Array a partir do seu nome
let indexReuniao = taskList.indexOf('Reunião');
console.log(indexReuniao);