'use strict';

let pigLatin = function(english) {

  let vowels = 'aeiou';

  let words = english.split(' ');

  let translatedWords = [];

  for (let i = 0; i < words.length; i++) {

    let word = words[i];

    if (vowels.includes(word[0])) {
      translatedWords.push(word + 'ay');
    } 
    
    else {
      let firstVowelIndex = 0;

      for (let j = 0; j < word.length; j++) {

        if (word[j] === 'q' && word[j + 1] === 'u') {
          firstVowelIndex = j + 2;
          break;
        }

        if (vowels.includes(word[j])) {
          firstVowelIndex = j;
          break;
        }
      }

      let beginning = word.slice(0, firstVowelIndex);
      let ending = word.slice(firstVowelIndex);

      translatedWords.push(ending + beginning + 'ay');
    }
  }

  return translatedWords.join(' ');
};

module.exports = pigLatin;