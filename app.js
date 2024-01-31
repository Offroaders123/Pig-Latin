async function submitPigPhrase() {

  var input = /** @type {HTMLTextAreaElement} */ (document.getElementById('pigInput')).value;
  var translation = /** @type {HTMLDivElement} */ (document.getElementById('translation'));

  var header = document.createElement('h3');
  var text = document.createElement('p');

  //clear previous translation from the DOM
  if (translation.firstChild) translation.removeChild(translation.firstChild)

  //Append newly translated phrase to the DOM
  text.innerHTML = (await import("./pigLatin.js")).pigPhrase(input);
  translation.appendChild(text);
}