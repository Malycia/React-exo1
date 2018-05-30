/*
 * Exo6 : Un sacré pactole
 *
 * Se rendant compte que tout le monde ne peut pas entrer en boite,
 * la famille se console en se disant qu'ils ont économisé des sous.
 *
 * D'ailleurs, ils aimeraient bien savoir combien ils ont d'argent
 * au total. Mais ils ne savent pas utiliser `reduce`.
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce
 *
 * Pouvez-vous leur filer un coup de main ?
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

var computeTotalCash = function(cumul, person) {
  return cumul + person.cash;
};

var totalCash = users.reduce(computeTotalCash, 0);

// Version alternative : fonction fléchée
// var totalCash = users.reduce((cumul, person) => cumul + person, 0);










/*
 * Tests
 */
var result = document.getElementById('test');
if (totalCash === 4447) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
