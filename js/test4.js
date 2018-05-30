/*
 * Exo4 : Un peu d'épices…
 *
 * On s'aperçoit qu'on fait pas mal d'additions et de multiplications.
 * Comme on est fainéant, on veut se créer des fonctions pour créer
 * des calculettes :) On appelle ça faire du "curry".
 *
 * Créez les fonctions createSum et createMulti, qui permettent de créer
 * des fonctions qui additionnent ou qui multiplie.
 *
 * Ex :
 *    var addTwo = createSum(2);
 *    addTwo(14); // => renvoie 16
 *    addTwo(42); // => renvoie 44
 *
 *    var double = createMulti(2);
 *    double(14); // => renvoie 28
 *    double(42); // => renvoie 84
 */


function createSum(number1) {
  // La fonction qui est à l'intérieur est une closure…
  return function(number2) {
    return number1 + number2;
  };
}

function createMulti(number1) {
  // La fonction qui est à l'intérieur est une closure…
  return function(number2) {
    return number1 * number2;
  };
}












/*
 * Tests
 */
var result = document.getElementById('test');
var addTen = createSum(10);
var double = createMulti(2);
var triple = createMulti(3);
if (
  addTen
  && double
  && triple
  && double(3) === 6
  && triple(20) === 60
  && triple(50) === double(75)
  && addTen(-110) === -100
  && addTen(1) === 11
  && createSum('coucou')('js') === 'coucoujs'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
