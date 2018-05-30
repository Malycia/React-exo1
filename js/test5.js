/*
 * Exo5 : Ça va pas être possible…
 *
 * La famille Dunphy prévoit une sortie en boite.
 * Seul problème, pour rentrer il faut :
 *    - Avoir au moins 18 ans
 *    - Avoir au moins $20 en poche
 *    - Ceux qui n'ont pas 18 ans peuvent corrompre le videur, s'ils ont $500 en poche
 *
 * Créez un array admittedUsers à partir de l'array users
 * avec les membres de la famille qui ont le droit d'entrer.
 */

var users = [
  {
    name: 'Claire',
    age: 34,
    cash: 2250,
  },
  {
    name: 'Phil',
    age: 35,
    cash: 1005,
  },
  {
    name: 'Haley',
    age: 18,
    cash: 10,
  },
  {
    name: 'Luke',
    age: 15,
    cash: 0,
  },
  {
    name: 'Alex',
    age: 16,
    cash: 400,
  },
  {
    name: 'Manny',
    age: 14,
    cash: 777,
  },
  {
    name: 'Lily',
    age: 5,
    cash: 5,
  },
];

var videur = function(person) {
  var decision = (person.age >= 18 && person.cash >= 20) || person.cash >= 500;
  return decision;
};

var admittedUsers = users.filter(videur);










/*
 * Tests
 */
var result = document.getElementById('test');
if (
  admittedUsers.length === 3
  && admittedUsers[0].name === 'Claire'
  && admittedUsers[1].name === 'Phil'
  && admittedUsers[2].name === 'Manny'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
