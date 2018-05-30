/*
 * Exo8 : Soyons poli
 *
 * Les développeurs c'est pas toujours poli. La tête dans
 * le code, on en oublie parfois les bonnes manières.
 * Du coup, on va se créer un robot qui répond à notre place.
 *
 * Créez la fonction createRobot qui fonctionnera comme ci-dessous :
 * Ex:
 *    var hello = createRobot(['Bonjour', 'Hello']);
 *    hello.say(); // => 'Bonjour'
 *    hello.say(); // => 'Hello'
 *    hello.say(); // => 'Bonjour'
 *    hello.add('Coucou');
 *    hello.say(); // => 'Hello'
 *    hello.say(); // => 'Coucou'
 *    hello.say(); // => 'Bonjour'
 *    hello.delete('Hello');
 *    hello.say(); // => 'Coucou'
 *    hello.say(); // => 'Bonjour'
 *    hello.say(); // => 'Coucou'
 *    hello.add('Salut');
 *    hello.say(); // => 'Salut'
 *
 *  - say() = permet de dire la prochaine phrase
 *  - add(x) = permet d'ajouter la phrase x au vocabulaire du robot
 *  - delete(x) = permet de supprimer la phrase x du vocabulaire
 */
function createRobot(vocable) {
  var index = 0;
  return {
    say: function(){
      var mot = vocable[index];
      index++;
      if (index >= vocable.length) {
        index = 0 ;
      }
      return mot;
    },
    add: function(word){
      vocable.push(word);
    },
    delete: function(word){
      vocable = vocable.filter(w => w !==word);
    },
  };

}

// var robot = createRobot(['coucou', 'hello']);
// robot.say();
// robot.say();
// robot.say();
// robot.say();















/*
 * Tests
 */
var result = document.getElementById('test');
var thanks = createRobot(['Thank you']);
thanks.add('Thanks');
thanks.delete('Thank you');
thanks.add('Ouh, thanks a lot!');
thanks.add('Thank you');
var oclock = createRobot([]);
oclock.add('J’peux pas, j’ai React');
oclock.delete('blabla');
oclock.add('Le JS, c’est la vie');
oclock.delete('J’peux pas, j’ai React');
if (
  thanks.say() === 'Thanks'
  && thanks.say() === 'Ouh, thanks a lot!'
  && thanks.say() === 'Thank you'
  && oclock.say() === 'Le JS, c’est la vie'
  && oclock.say() === 'Le JS, c’est la vie'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
