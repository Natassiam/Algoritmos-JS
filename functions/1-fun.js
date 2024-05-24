/* let soma = 2 + 4;
console.log(soma);

let soma2 = 20 + 4;
console.log(soma2); */


function somaNumeros(numero1, numero2){
  return numero1 + numero2;
}
console.log(somaNumeros(10, 7));

function writeName(string){
  return `${string} gosta de Algoritmos!`
}
console.log(writeName('Xablau'));
console.log(writeName('Witallo'));
console.log(writeName('Kayo'));


const multNumbers = (numero1, numero2) =>  numero1 * numero2;
console.log(multNumbers(2, 2));

const encontraOPrimeiro = (array) => {
   return array.find((elemento) => elemento.length > 3);
}

 console.log(encontraOPrimeiro(['abc', 'fruta', 'legumes', 'aula', 'sol']));

const maiorDoQueTres = (num) => {
  if (num > 3) {
    return true;    
  } 
}

 console.log(maiorDoQueTres(3));

 






