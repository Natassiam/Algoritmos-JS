// 1-  Desenvolva um código capaz de encontrar o primeiro elemento de um array que satisfaça uma condição.
let array = [0, 1, 3, 5];
for (let index = 0; index < array.length; index++) {
  if (array[index] === 3) {
    console.log(array[index]);
  }
}

// Refatorando
let arrayNew = [0, 1, 3, 5];
let find = arrayNew.find((element) => element === 3);
console.log(find);



// 2 -Desenvolva um código que encontre a primeira palavra que começe com a letra 'a' minusculo.
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let index = 0; index < names.length; index+=1) {
  if (names[index][0] === 'A' || names[index][0] === 'a') {
    console.log(names[index]);
  }
}

// 3 - Desenvolva um código que encontre a primeira palavra que tenha mais de 5 letras.
let animals = ['Cachorro', 'Gato', 'Elefante', 'Leão', 'Macaco', 'Papagaio', 'Galinha', 'Pato'];
animals.find((element) => element.length > 5);
console.log(animals.find((element) => element.length > 5));