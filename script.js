// Exemplo 1

const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  students.forEach((student) => {
    if (student.grade >= 60) student.approved = 'Aprovado';
    else student.approved = 'Recuperação';
  });
}

verifyGrades();

// console.log(students);

// Exemplo 2

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

// console.log(firstMultipleOf5);

// Exemplo 3

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element) => console.log('Cada elemento do array:', element));

arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  // console.log('Cada elemento do array:', element);
  // console.log('Index, posição do elemento:', indexOfTheArray);
  // console.log('Array percorrido:', theEntireArray);
});

// Exemplo 4

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  //console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// Exemplo 5

const numbers2 = [19, 21, 30, 3, 45, 22, 15];

const isEven = numbers2.find((number) => number % 2 === 0);

// console.log(isEven);

// Exemplo 6

const findDivisibleBy3And5 = () => {
  return numbers2.find((number) => (number % 3 === 0) && (number % 5 === 0));
}

// console.log(findDivisibleBy3And5());

// Exemplo 7

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
}

// console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}

// console.log(findMusic('31031685'))

// Exemplo 8

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames));
// console.log(verifyFirstLetter('x', listNames));

// EXemplo 9

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades2 = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

// console.log(verifyGrades2(grades));
