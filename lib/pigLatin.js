'use strict';

let pigLatin = function(english) {

  //this are the vowels we are looking for
  let vowels = 'aeiou';
  
  //splits the sentence into words
  let words = english.split(' ');
  
  //this is an array to store the pig latin words
  let translatedWords = [];
 // loop through each word
  for (let i = 0; i < words.length; i++) {

    let word = words[i];

    //if the vowel found in the first index then put ay after the word
    if (vowels.includes(word[0])) {
      translatedWords.push(word + 'ay');
    } 
    
    //if it is not fount in the first index 
    else {
      let firstVowelIndex = 0;

      for (let j = 0; j < word.length; j++) {
        // incase there is a qu then we treat it as constant
        if (word[j] === 'q' && word[j + 1] === 'u') {
          //we move after u
          firstVowelIndex = j + 2;
          break;
        }
        //we stop wherever we find the first vowel
        if (vowels.includes(word[j])) {
          firstVowelIndex = j;
          break;
        }
      }
      // we split the word into two parts 1 from first letter to the first vowel then we keep the rest into the second word
      let beginning = word.slice(0, firstVowelIndex);
      let ending = word.slice(firstVowelIndex);
      //we combine the two words and add the ay at the end
      translatedWords.push(ending + beginning + 'ay');
    }
  }
  // create again the sentence
  return translatedWords.join(' ');
};

module.exports = pigLatin;