// Example 1

const numbers1 = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers1 = numbers1.reduce(((result, number) => result + number));
// console.log(sumNumbers1);

const getSum1 = (result, number) => result + number;
const sumNumbers2 = numbers1.reduce(getSum1);
// console.log(sumNumbers2);

// Example 2

const sumNumbers3 = numbers1.reduce(((result, number) => result + number), 10);
// console.log(sumNumbers3);

const getSum2 = (result, number) => result + number;
const sumNumbers4 = numbers1.reduce(getSum2, 10);
// console.log(sumNumbers4);

// Example 3

const numbers2 = [50, 85, -30, 3, 15];

const higherNumber = numbers2.reduce((previousValue, currentValue) => (previousValue < currentValue ? currentValue : previousValue));
// console.log(higherNumber);

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers2.reduce(getBigger, 0);
// console.log(bigger);

// Example 4

const numbers3 = [3, 18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = numbers3.reduce((previousValue, currentValue) => ((currentValue % 2 === 0) ? previousValue + currentValue : previousValue), 0);

// console.log(sumEvenNumbers);

const sumEvenNumbersFilter = numbers3.filter((number) => number % 2 === 0).reduce((previousValue, currentValue) => previousValue + currentValue);

// console.log(sumEvenNumbersFilter);

const sumPair1 = (currentValue, number) => (number % 2 === 0) ? currentValue + number : currentValue;
const sumNumbers5 = (array) => array.reduce(sumPair1, 0);

// console.log(sumNumbers5(numbers3));

const getEven = (number) => number % 2 === 0;
const sumPair2 = (currentValue, number) => currentValue + number;
const sumNumbers6 = (array) => array.filter(getEven).reduce(sumPair2);

// console.log(sumNumbers6(numbers3));

// Example 5

const estudantes = [
  { nome: 'Jorge', sobrenome: 'Silva', idade: 14, turno: 'Manhã',
    materias: [ { name: 'Matemática', nota: 67 }, { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 }, { name: 'Biologia', nota: 65 }, ], },
  { nome: 'Mario', sobrenome: 'Ferreira', idade: 15, turno: 'Tarde',
    materias: [ { name: 'Matemática', nota: 59 }, { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 }, { name: 'Biologia', nota: 92 }, ], },
  { nome: 'Jorge', sobrenome: 'Santos', idade: 15, turno: 'Manhã',
    materias: [ { name: 'Matemática', nota: 76 }, { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 }, { name: 'Biologia', nota: 80 }, ], },
  { nome: 'Maria', sobrenome: 'Silveira', idade: 14, turno: 'Manhã',
    materias: [ { name: 'Matemática', nota: 91 }, { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 }, { name: 'Biologia', nota: 90 }, ], },
  { nome: 'Natalia', sobrenome: 'Castro', idade: 14, turno: 'Manhã',
    materias: [ { name: 'Matemática', nota: 70 }, { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 }, { name: 'Biologia', nota: 50 }, ], },
  { nome: 'Wilson', sobrenome: 'Martins', idade: 14, turno: 'Manhã',
    materias: [ { name: 'Matemática', nota: 80 }, { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 }, { name: 'Biologia', nota: 75 }, ], },
];

const bestSubject = estudantes.map((estudante) => {
  const higherGrade = estudante.materias.reduce((previousValue, currentValues) => {
    return ((currentValues.nota >= previousValue.nota) ? currentValues : previousValue);
  });
  return { name: estudante.nome, materia: higherGrade.name };
});

console.log(bestSubject);

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));
