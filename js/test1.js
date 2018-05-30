/*
 * Exo1 : For Hitch
 *
 * Hitch a besoin de ses outils pour séduire.
 * Il vous donne un array et il aimerait qu'avec cela, vous lui créez un <li>
 * puis que vous l'ajoutiez dans #result, pour chacun des objets.
 */

var items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];
var ul = document.getElementById('result');

// Quand on utilisera createLi avec un forEach, chaque item du tableau sera
// passé en paramètre de la fonction.
function createLi(item) {
  var el = document.createElement('li'); // création d'un objet JS
  el.textContent = item;
  ul.appendChild(el);
}

// Pour chaque item, créer un li et l'ajouter (effet de bord) :
items.forEach(createLi);
