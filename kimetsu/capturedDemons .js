//construa uma função que retorne
// um array com os nomes dos personagens
// que possuam altos niveis de poder

const { demonsSlaier, demons } = require('./data');

const capturedDemons = (array) => {
  const filterDemons = array.filter((element) =>
     element.forceLevel > 60);
  /* console.log(filterDemons) */
  const mapNamesDemons = filterDemons.map((el)=>
     ({"Demon_Level": el.name}));
/*   console.log(mapNamesDemons); */
return mapNamesDemons;
}


console.log(capturedDemons(demons));

/* [
  { Demon_Level: 'Muzan Kibutsuji' },
  { Demon_Level: 'Kokushibo' },
  { Demon_Level: 'Akaza' },
  { Demon_Level: 'Doma' },
  { Demon_Level: 'Gyutaro' },
  { Demon_Level: 'Daki' }
] */
