const array = [0, 1, 3, 5];
let numero = 0;
let arrayNovo = [];
for (let index = 0; index < array.length; index++) {
  
  numero = array[index]*2;
  arrayNovo.push(numero);
}
console.log(arrayNovo);