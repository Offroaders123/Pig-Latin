import { pigPhrase, unpigPhrase } from "./pigLatin.js";

const demo: string[] = [
  "nice!",
  "does this work with all of this?",
  "day",
  "pig latin",
  "hello world",
  "hi mom",
  "Capital Letters, Do They Work Right?",
  "Pig Linter haha"
];
const out = demo
  .map((entry): [string, string] => [entry, pigPhrase(entry)])
  .map((entry): [string, string, string] => [...entry, unpigPhrase(entry[1])]);

for (const entry of out){
  console.log(entry);
}