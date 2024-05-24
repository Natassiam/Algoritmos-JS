const pessoas = [
  {
    nome: 'Davi',
    idade: 19,
    disciplinasComplicadinhas: ['Matematica', 'Algoritmo'],
  },
  {
    nome: 'Maria',
    idade: 19,
    disciplinasComplicadinhas: ['Front-end'],
  },
  {
    nome: 'Luan',
    idade: 20,
    disciplinasComplicadinhas: ['Matematica', 'Algoritmo'],
  },
];

let nomePessoa = pessoas.filter((element) => element.idade === 19);
/* console.log(nomePessoa); */


let getArray = pessoas.map((element) => element.disciplinasComplicadinhas);
console.log(getArray);
