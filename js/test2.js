/*
 * Exo2 : A ma guise
 *
 * Des datas nous proviennent du back, mais la structure ne nous arrange pas.
 * Cela dit, vous n'avez pas envie d'aller voir le dev back pour qu'il change,
 * car vraisemblablement, il n'a pas pris de douche depuis longtemps,
 * et il n'est pas connecté sur Slack.
 *
 * On préfererait avoir seulement une propriété `name` avec "Prénom Nom"
 * et `young`, un booléen qui est true quand le personnage a moins de 50 ans.
 * On souhaite que les infos inutiles ne soient pas conservées.
 *
 * En gros, on souhaite passer d'un tableau à un autre tableau.
 * On a appris une fonction qui nous permet justement de faire ça : map !
 */

var datas = [
  {
    firstname: 'Marge',
    lastname: 'Simpson',
    gender: 'Women',
    age: 34,
  },
  {
    firstname: 'Ned',
    lastname: 'Flanders',
    age: 61,
  },
  {
    firstname: 'Charles Montgomery',
    lastname: 'Burns',
    age: 104,
  },
  {
    firstname: 'Waylon',
    lastname: 'Smithers',
    age: 36,
  },
];

var transformData = function(item) {
  return {
    name: `${item.firstname} ${item.lastname}`, // litéral de gabarit
    young: item.age < 50
  };
};
var characters = datas.map(transformData);














/*
 * Tests
 */
var result = document.getElementById('test');
if (
  // On a désormais `name` et `young`
  characters[0].name === 'Marge Simpson'
  && characters[1].name === 'Ned Flanders'
  && characters[2].name === 'Charles Montgomery Burns'
  && characters[3].name === 'Waylon Smithers'
  && characters[0].young
  && !characters[1].young
  && !characters[2].young
  && characters[3].young

  // Les anciennes props ne doivent plus être définies
  && typeof characters[0].gender === 'undefined'
  && typeof characters[0].firstname === 'undefined'
  && typeof characters[0].lastname === 'undefined'
  && typeof characters[1].firstname === 'undefined'
  && typeof characters[1].lastname === 'undefined'
  && typeof characters[2].firstname === 'undefined'
  && typeof characters[2].lastname === 'undefined'
  && typeof characters[3].firstname === 'undefined'
  && typeof characters[3].lastname === 'undefined'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
