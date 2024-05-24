// Construa um código que filtre os elementos
// pares do array abaixo e retorne um novo array somente com eles.

let arrayzinho = [ 20, 10, 9, 8,11, 3, 4, 0]
for (let index = 0; index < arrayzinho.length; index+=1) {
  if(arrayzinho[index] % 2 === 0){
    console.log(`Este número é par: ${arrayzinho[index]}`)
  }
  }


  // Refatorando

  let arrayzinhoNew = [ 20, 10, 9, 8,11, 3, 4, 0];
  let newArray = arrayzinhoNew.filter((element) => element % 2 === 0);
  console.log(newArray);

  // 2- Filtre desse array apenas os animais que contém 5 letras.
  let animals = ['Cachorro', 'Gato', 'Elefante', 'Leão', 'Macaco', 'Papagaio', 'Galinha', 'Pato'];
  let newArray2 = animals.filter((element) => element.length === 5);
  console.log(newArray2);

  // 3- Filtre os elementos do array abaixo que possuem a letra 'a'
  // e retorne um novo array com eles. 
  let names = ['Wittalo', 'Davi', 'Aguiar', 'Jener', 'Lucas'];
  let newArray3 = names.filter((element) => element.includes('a'));
  //console.log(newArray3);


