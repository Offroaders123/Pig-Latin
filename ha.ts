import { pigPhrase, unpigPhrase } from "./pigLatin.js";

const demo: string[] = [
  "nice!",
  "Does this work with all of this?",
  "day",
  "pig latin",
  "Hello world",
  "Hi mom",
  "Capital Letters, Do They Work Right?",
  "Pig Linter haha",
  "ay",
  ""
];
const out = demo
  .map((entry): [string, string] => [entry, pigPhrase(entry)])
  .map((entry): [string, string, string] => [...entry, unpigPhrase(entry[1])]);

for (const entry of out){
  console.log(entry);
}