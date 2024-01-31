async function submitPigPhrase(): Promise<void> {

  const input = document.querySelector<HTMLTextAreaElement>('#pigInput')!.value;
  const translation = document.querySelector<HTMLDivElement>('#translation')!;

  // const header = document.createElement('h3');
  const text = document.createElement('p');

  //clear previous translation from the DOM
  translation.firstChild?.remove()

  //Append newly translated phrase to the DOM
  text.innerHTML = (await import("./pigLatin.js")).pigPhrase(input);
  translation.append(text);
}