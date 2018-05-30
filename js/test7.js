/*
 * Exo7 : Hello Proto
 *
 * Bon, ils n'ont pas été en boite, mais vraisemblablement
 * ça leur a plus de faire des maths. Du coup, ils aimeraient
 * carrément enrichir les types de javascript !
 *
 * Pour cela on peut utiliser `prototype` sur un type.
 *
 * Ex:
 *    Array.prototype.hello = function() {
 *      console.log('Je suis un array qui contient ' + this.length + ' éléments.');
 *    }
 *
 *    ['un', 'deux', 'trois'].hello() // => Je suis un array qui contient 3 éléments.
 *
 *
 * On aimerait enrichir le type Array avec les méthodes suivantes :
 *    - sum() = renvoie la somme de tous les éléments
 *    - product() = renvoie le produit (multiplication) de tous les éléments
 *    - divide(x) = renvoie un array, avec chaque élément de l'array qui a été divisé par x
 */

Array.prototype.sum = function(){
  var total = 0;
  var calcul = function(value){
    total += value;
    return total;
  };
  this.forEach(calcul);
  return total;

};

Array.prototype.product = function(){
  var total = 1;
  var calcul = function(value){
    total *= value;
    return total;
  };
  this.forEach(calcul);
  return total;

};

// Array.prototype.divide = function(number){
//   var total = 0;
//   var calcul = function(value){
//     total += value / number;
//     console.log(total);
//     return total;
//   };
//   this.forEach(calcul);
//   console.log(total);
//   return total;
//
// };
Array.prototype.divide = function(number){
  var total = [];
  var calcul = function(value, index){
    total[index] = value / number;
    console.log(total);
    return total[index];
  };
  this.forEach(calcul);
  console.log(total);
  return total;

};













/*
 * Tests
 */
var result = document.getElementById('test');
if (
  [1, 2, 3, 4].sum() === 10
  && [1, 2, 3, 4].product() === 24
  && [1, 2, 3, 4].divide(2).sum() === 5
  && [4, 4, 4, 4].divide(4).product() === 1
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
