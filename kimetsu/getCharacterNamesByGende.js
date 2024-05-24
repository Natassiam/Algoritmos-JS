const { demonsSlaier, demons } = require('./data');

// desenvolva uma funcao que retorne um objeto com os nomes dos personagens separados por genero
// salve dentro de um novo array, para cada um dos generos, os nomes dos personagens que pertencem a ele.

function getCharacterNamesByGender(characters) {
const getGenreMale = characters.filter((character) => character.gender === "male");
const getGenreFemale = characters.filter((character) => character.gender === "female");
const obj = { 
   male: getGenreMale.map((character) => character.name),
  female: getGenreFemale.map((character) => character.name)
}
 return obj;
 }


const characterNamesWithDemonArt = getCharacterNamesByGender(demonsSlaier);
console.log(characterNamesWithDemonArt);


/* {
  male: [
    'Tanjiro Kamado',
    'Zenitsu Agatsuma',
    'Inosuke Hashibira',
    'Giyu Tomioka',
    'Kyojuro Rengoku',
    'Shinobu Kocho',
    'Tengen Uzui'
  ],
  female: [ 'Mitsuri Kanroji' ]
} */