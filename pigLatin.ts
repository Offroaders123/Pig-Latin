/**
 * Takes an sentence and converts each word into pig latin
 * @param phrase Phrase that will be converted into pig latin.
 * @return Phrase that has been translated into pig latin
 */
export function pigPhrase(phrase: string, delimiter: Delimiter = Delimiter.HYPHEN): string {
  return phrase
    .split(" ")
    .map(word => pigWord(word, delimiter))
    .join(" ");
}

/**
 * converts a pig latin phrase back into it's native language
 * @param phrase Pig Latin phrase that will be converted back into the native language.
 * @return Phrase that has been translated into the native language.
 */
export function unpigPhrase(phrase: string, delimiter: Delimiter = Delimiter.HYPHEN): string {
  return phrase
    .split(" ")
    .map(word => unpigWord(word, delimiter))
    .join(" ");
}

export enum Delimiter {
  HYPHEN = "-",
  NONE = "",
  NULL = "\0",
  ZERO_WIDTH = "\u200b"
}

enum WordSuffix {
  AY = "ay",
  YAY = "yay"
}

/**
 * Takes a word and converts it into pig latin
 * @param word This is the word that will be converted
 * @return Word that hass been converted into pig latin
 */
function pigWord(word: string, delimiter: Delimiter): string {
  const splitIndex: number = findVowelIndex(word);
  const upperCaseMap: boolean[] = word.split("").map(letter => isUpperCase(letter));
  const firstGroup: string = word.slice(0, splitIndex);
  const secondGroup: string = word.slice(splitIndex, word.length);
  console.log(word);
  console.log(splitIndex, [firstGroup, secondGroup]);
  const suffix: WordSuffix = vowels.test(word[0] ?? "") ? WordSuffix.AY : WordSuffix.YAY;
  const result: string = `${secondGroup}${delimiter}${firstGroup}${suffix}`
    .split("")
    .map((letter, i) => upperCaseMap[i] ? letter.toUpperCase() : letter.toLowerCase())
    .join("");
  console.log(result, "\n");
  return result;
}

/**
 * Takes a word in pig latin and converts it into a human readable word
 * @param word Word that will be translated
 * @return Translated word
 */
function unpigWord(word: string, delimiter: Delimiter): string {
  const splitIndex: number = word.search(delimiter);
  const upperCaseMap: boolean[] = word.split("").map(letter => isUpperCase(letter));
  const firstGroup: string = word.slice(0, splitIndex);
  const secondGroup: string = word.slice(splitIndex + 1, -2);
  const result: string = `${secondGroup}${firstGroup}`
    .split("")
    .map((letter, i) => upperCaseMap[i] ? letter.toUpperCase() : letter.toLowerCase())
    .join("");
  return result;
}

const vowels = /[aeiou]/i;

/**
 * Finds the index of the first or last vowel in a word
 * @param word
 * @param firstIndex
 * @return position of the first or last vowel in the word
 */
function findVowelIndex(word: string, firstIndex: boolean = true): number {
  for (let i = 0; i <= word.length - 1; i++){
    const index: number = firstIndex ? i : word.length - i;
    if (vowels.test(word[index]!)){
      return index;
    }
  }
  const fallbackIndex: number = firstIndex ? word.length : 0;
  return fallbackIndex;
}

function isUpperCase(letter: string): boolean {
  return /\w/.test(letter) && letter.toUpperCase() === letter;
}

// const demo = "haaeg";
// console.log(demo[findVowelIndex(demo)]);
// console.log(demo[findVowelIndex(demo,false)]);

// console.log(pigPhrase("I built a pig latin translator program"));
//
// console.log(unpigPhrase("is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray"));