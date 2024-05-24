const array = [10, 4, 6, 7, 9, 22];

function arrayDobro (array) {
  return array.map((element) =>  `Este número ${element *2}
  é o dobro de ${element}!`);
}

console.log(arrayDobro(array));

/* function imprimeFrase (array) {
  for (let index = 0; index < array.length; index+=1) {
    const element = array[index];
    
  }
  return;
}

console.log(imprimeFrase(array)); */

