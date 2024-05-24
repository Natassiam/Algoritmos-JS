// construa uma função que retorne um array
// com as técnicas de respiração

const { demonsSlaier, demons } = require('./data');

const getBreathingTechniques = (array) => {
/* const filterBreathing = array.filter((element) =>
   element.breathingTechnique); */
return array.map((el)=>
   ({"breathingTechnique": el.breathingTechnique}) );
}

console.log(getBreathingTechniques(demonsSlaier));


/* [
  { breathingTechnique: 'Water Breathing' },
  { breathingTechnique: 'Thunder Breathing' },
  { breathingTechnique: 'Beast Breathing' },
  { breathingTechnique: 'Water Breathing' },
  { breathingTechnique: 'Flame Breathing' },
  { breathingTechnique: 'Insect Breathing' },
  { breathingTechnique: 'Sound Breathing' },
  { breathingTechnique: 'Love Breathing' }
] */