let nomes = ['Arthur', 'Miguel', 'Anna', 'Mariana', 'Davi', 'Anna'];
 let novo = nomes.find((elemento) => elemento === 'Anna');
/* console.log(novo); */



for (let index = 0; index < nomes.length; index+=1) {
  if(nomes[index] === 'Anna'){
    console.log('Consegui!');
  }
}

