/*
 * Exo3 : Chacun son tour
 *
 * Le stagiaire intégrateur nous a préparé des boites dans le HTML.
 * Ils les a mis en display: none, pour qu'on les affiche nous, en JS.
 *
 * On peut les récupérer avec la class `.box`
 * On doit les afficher, mais une à une, avec 1 seconde entre chaque.
 * Histoire de crâner auprès du stagiaire
 */

// var boxes = document.getElementsByClassName('box');
// Pas bon : retourne une collection de type HTMLCollection, pas de forEach :(

// var boxes = document.querySelectorAll('.box');
// Ok, retourne une collection de type NodeList qui connaît forEach :)

var boxes = document.querySelectorAll('.box');
boxes = Array.from(boxes);

// J'ai un Array, let's go!

var displayBox = function(box, index) {
  var delay = index * 1000;
  window.setTimeout(function() {
    box.style.display = 'block';
  }, delay);
};

boxes.forEach(displayBox); // exécution du forEach ==> temps 0 (de départ)
