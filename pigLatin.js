// @ts-check

// module.exports = pigPhrase;
// module.exports = unpigPhrase;

function submitPigPhrase() {

  var input = /** @type {HTMLTextAreaElement} */ (document.getElementById('pigInput')).value;
  var translation = /** @type {HTMLDivElement} */ (document.getElementById('translation'));

  var header = document.createElement('h3');
  var text = document.createElement('p');

  //clear previous translation from the DOM
  if (translation.firstChild) translation.removeChild(translation.firstChild)

  //Append newly translated phrase to the DOM
  text.innerHTML = pigPhrase(input);
  translation.appendChild(text);
}

/**
 * Takes an sentence and converts each word into pig latin
 * @param  {string} phrase Phrase that will be converted into pig latin.
 * @return {string} Phrase that has been translated into pig latin
 */
function pigPhrase (phrase) {
  var sentence = phrase.split(' ');
  var piggedPhrase = [];

  for (var i = 0; i <= sentence.length - 1; i++) {
    piggedPhrase.push(pigWord(sentence[i]));
  };
  return piggedPhrase.join(' ');
}

/**
 * converts a pig latin phrase back into it's native language
 * @param  {string} phrase Pig Latin phrase that will be converted back into the native language.
 * @return {string} Phrase that has been translated into the native language.
 */
function unpigPhrase (phrase) {
  var sentence = phrase.split(' ');
  var unpiggedPhrase = [];

  for (var i = 0; i <= sentence.length - 1; i++) {
    unpiggedPhrase.push(unpigWord(sentence[i]));
  };
  return unpiggedPhrase.join(' ');
}

/**
 * Takes a word and converts it into pig latin
 * @param  {string} word This is the word that will be converted
 * @return {string} Word that hass been converted into pig latin
 */
function pigWord (word) {
  return word.slice(findFirstVowel(word), word.length) + '-' + word.slice( -word.length, findFirstVowel(word)) + 'ay';
}

/**
 * Takes a word in pig latin and converts it into a human readable word
 * @param  {string} piggedWord Word that will be translated
 * @return {string} Translated word
 */
function unpigWord ( piggedWord ) {
  return piggedWord.slice( piggedWord.search('-') + 1, -2 ) + piggedWord.slice( 0, piggedWord.search('-'));
}

/**
 * Finds the first vowel in a word
 * @param  {string} word
 * @return {number} position of the first vowel in the word
 */

function findFirstVowel (word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i <= word.length - 1; i++) {

    if (vowels.indexOf(word[i]) !== -1 ) {
      return i;
    }
  }
  return word.length;
}

// console.log(pigPhrase('I built a pig latin translator program'));
//
// console.log(unpigPhrase( 'is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray' ));