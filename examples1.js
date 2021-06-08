const assert = require('assert');

// Operações Assíncronas

// Example 01

setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);
console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Example 02

const pushNumber = (list, number) => list.push(number);
let numbers1 = [];
pushNumber(numbers1, 1);
pushNumber(numbers1, 2);
pushNumber(numbers1, 3);
assert.deepStrictEqual(numbers1, [1, 2, 3]);

// Example 03

let numbers2 = [];
setTimeout(() => pushNumber(numbers2, 1), 3000);
pushNumber(numbers2, 2);
pushNumber(numbers2, 3);
// assert.deepStrictEqual(numbers2, [1, 2, 3]); // essa validação falha
assert.deepStrictEqual(numbers2, [2, 3]);
setTimeout(() => assert.deepStrictEqual(numbers2, [2, 3, 1]), 3000);
