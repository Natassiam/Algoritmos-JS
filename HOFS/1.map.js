// Construa um código que consiga mapear o array abaixo e
// retorne um novo array com cada elemento multiplicado por 2.

let arrayzinho = [0, 1, 3, 5];
for (let index = 0; index < arrayzinho.length; index+=1) {
  console.log(arrayzinho[index] * 2);  
}


// Refatorando
let arrayzinhoNew = [0, 1, 3, 5];
let newArray = arrayzinhoNew.map((element) => element * 2);

console.log(newArray);

// 2- Monte um array com números aleatórios e o mapeie,
// retornando um novo array com cada elemento elevado ao quadrado.
let arrayzinho2 = [2, 4, 6, 8, 10];
let newArray2 = arrayzinho2.map((element) => element ** 2);
console.log(newArray2);


// 3- Crie um novo array com a seguinte estrutura, 'Nome do aluno: João'.
// Utilize o array abaixo:
let names = ['Wittalo', 'Davi', 'Aguiar', 'Jener', 'Lucas'];
let newArray3 = names.map((element) => `Nome do aluno: ${element}`);
console.log(newArray3);