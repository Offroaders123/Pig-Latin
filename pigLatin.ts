/**
 * Takes an sentence and converts each word into pig latin
 * @param  phrase Phrase that will be converted into pig latin.
 * @return Phrase that has been translated into pig latin
 */
export function pigPhrase (phrase: string): string {
  const sentence = phrase.split(' ');
  const piggedPhrase = [];

  for (const word of sentence) {
    piggedPhrase.push(pigWord(word));
  };
  return piggedPhrase.join(' ');
}

/**
 * converts a pig latin phrase back into it's native language
 * @param  phrase Pig Latin phrase that will be converted back into the native language.
 * @return Phrase that has been translated into the native language.
 */
export function unpigPhrase (phrase: string): string {
  const sentence = phrase.split(' ');
  const unpiggedPhrase = [];

  for (const word of sentence) {
    unpiggedPhrase.push(unpigWord(word));
  };
  return unpiggedPhrase.join(' ');
}

/**
 * Takes a word and converts it into pig latin
 * @param  word This is the word that will be converted
 * @return Word that hass been converted into pig latin
 */
function pigWord (word: string): string {
  return word.slice(findFirstVowel(word), word.length) + '-' + word.slice( -word.length, findFirstVowel(word)) + 'ay';
}

/**
 * Takes a word in pig latin and converts it into a human readable word
 * @param  piggedWord Word that will be translated
 * @return Translated word
 */
function unpigWord ( piggedWord: string ): string {
  return piggedWord.slice( piggedWord.search('-') + 1, -2 ) + piggedWord.slice( 0, piggedWord.search('-'));
}

/**
 * Finds the first vowel in a word
 * @param  word
 * @return position of the first vowel in the word
 */

function findFirstVowel (word: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i <= word.length - 1; i++) {

    if (vowels.indexOf(word[i]!) !== -1 ) {
      return i;
    }
  }
  return word.length;
}

// console.log(pigPhrase('I built a pig latin translator program'));
//
// console.log(unpigPhrase( 'is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray' ));