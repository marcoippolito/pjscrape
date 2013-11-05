#!/usr/env/node

var arrayprova = ['http://www.ucimu.it/en/catalogue/companies/v/tube-undefined/','http://www.ucimu.it/en/catalogue/companies/v/tube-tech/'];
word = 'undefined';


// remove from the array the element array[i] if it contains the word "word"
function removeElemIfWord (array, word) {

  var removed;

  for (i = 0; i < array.length; i++) {
    if (array[i].indexOf(word) !== -1) {
      removed = array.splice(i, 1);
//      console.log('elemento rimosso: ' + removed);
    }
    else {
//      console.log('elemento non rimosso: ');
    }
  }
//  console.log(array);
  exports.getArray = array;
}

module.exports.removeElemIfWord = removeElemIfWord;

//removeElemIfWord(arrayprova, word);
