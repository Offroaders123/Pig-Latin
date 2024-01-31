import { pigPhrase } from "./pigLatin.js";

const input = document.querySelector<HTMLTextAreaElement>('#pigInput')!.value;
const translation = document.querySelector<HTMLDivElement>('#translation')!;

export function submitPigPhrase(): void {

  // const header = document.createElement('h3');
  const text = document.createElement('p');

  //clear previous translation from the DOM
  translation.firstChild?.remove()

  //Append newly translated phrase to the DOM
  text.append(pigPhrase(input));
  translation.append(text);
}

window.submitPigPhrase = submitPigPhrase;

declare global {
  interface Window {
    submitPigPhrase: typeof submitPigPhrase;
  }
}