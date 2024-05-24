let arrayNomes = ['Maria', 'Davi', 'Mariana', 'Luan', 'Gustavo'];
/* let arrayNovo = [];
for (let index = 0; index < arrayNomes.length; index+=1) {
if(arrayNomes[index].length > 4){
arrayNovo.push(arrayNomes[index]);
} */
/* console.log(arrayNomes[index].length === 4); */
/* }; */
/* console.log(arrayNovo); */

/* let filterNomes = arrayNomes.filter((elemento)=>
elemento.length < 4);
console.log(filterNomes);

 */
const words = ['apple', 'banana', 'orange', 'grape', 'apricot'];

// considere o array acima e onde tiver a letra e, substitua por *
const filterWithE = words.filter((word) => word.includes('e'));
console.log(filterWithE);

const tarefasConcluidas = (listaDeTarefas) => {
  return listaDeTarefas.filter((tarefa) => tarefa.concluida);
};

const tarefas = [
  { descricao: 'Estudar JavaScript', concluida: true },
  { descricao: 'Fazer compras', concluida: false },
  { descricao: 'Preparar relatório', concluida: true },
  { descricao: 'Ir à academia', concluida: false },
];
console.log(tarefasConcluidas(tarefas));
let students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 90 },
  { name: 'Jim', grade: 78 },
  { name: 'Jill', grade: 92 },
];

function findStudent(name) {
  let student = students.find((student) => student.name === name);

  if (student) {
    console.log(`${student.name} found with grade ${student.grade}.`);
  } else {
    console.log('Student not found.');
  }
}

findStudent('Jane');

console.log(tarefasConcluidas(tarefas));
// Encontrar o primeiro número maior que o valor passado como argumento para a função. Caso não exista, retornar uma mensagem.
let numbers = [1, 2, 3, 4, 5];

function findNumber(num) {
  let foundNumber = numbers.find((number) => number > num);

  if (foundNumber) {
    console.log(`Number ${foundNumber} found in the array.`);
  } else {
    console.log('Number not found in the array.');
  }
}

findNumber(4);

// Math.floor faz o arredondamento para baixo de um número decimal.

// Dado um array de números, encontrar a mediana da soma dos valores.
// Caso o array tenha um número par de elementos, a mediana é
// a média entre os dois valores do meio.

let arrayzim = [0, 2, 5, 9, 20, 100];
const mediana = (array) => {
  let soma = 0;
  for (let index = 0; index < array.length; index += 1) {
    soma += array[index];
  }
  let mediana = 0;
  if (soma % 2 === 0) {
    mediana = soma / 2;
  } else {
    mediana = Math.floor(soma / 2);
  }
  return mediana;
};
console.log(mediana(arrayzim));

// Sua função deve encontrar e retornar o tamanho o array buscaProdutosUnicos —
// que contém objetos de produtos do estoque.

const buscaProdutosUnicos = (produtos) => {
  return produtos.length;
};
console.log(buscaProdutosUnicos([
  { nome: 'Arroz', quantidade: 2 },
  { nome: 'Feijão', quantidade: 3 },
  { nome: 'Macarrão', quantidade: 3 },
]));

// 6
// 


