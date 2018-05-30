/*
 * Exo9 : BONUS
 *
 * Wouaw, vous êtes déjà au point 9 ?
 * Ça veut dire que vous avez traversé les obstacles d'ES5,
 * passé entre les mailles de .filter(), en suivant la .map().
 *
 * Bref, c'est que vous êtes chaud pour un peu d'ES6 :)
 * Pas besoin de brunch pour l'instant, Chrome connaît.
 * ESLint risque de criser un peu m'enfin…
 *
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/param%C3%A8tres_du_reste
 *
 * Le but, faire la moyenne des nombres passés en argument,
 * quelque soit le nombre d'arguments :)
 */

function average(...grades) {}













/*
 * Tests
 */
var result = document.getElementById('test');
if (average(15, 10, 16, 9) === 12.5) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
