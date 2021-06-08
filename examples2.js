const assert = require('assert');

// Callbacks

// Example 04

const myExpenses = [ { gym: 99 }, { ifood: 200 }, { phone: 60 }, { internet: 100 } ];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {
  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;
  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

// Example 05

const userFullName1 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality1 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser1 = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // console.log(userToReturn);
  return callback(userToReturn);
};

console.log(getUser1(userFullName1));
console.log(getUser1(userNationality1));

assert.strictEqual(getUser1(userFullName1), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser1(userNationality1), "Ivan is Russian"); // complete a chamada da função de getUser

// Example 06

const userFullName2 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality2 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (callback) => {
  let userToReturn;
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // console.log(user);
    console.log(callback(user));
  }, delay());
};

getUser2(userFullName2); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser2(userNationality2); // deve imprimir "Ivan is Russian" depois de um certo tempo
