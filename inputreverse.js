"use strict";

//Reversing a string
function reverseInput(){
  let txt = prompt("Type in a word");
  //let txt= "Hello";
  txt = txt.split("");
  txt.reverse("");
  txt = txt.join("");
  return txt;
}
let txt= reverseInput();
console.log(txt);

//other examples of reversing a string
// let word = "hello";
// let reverseWord = "";
//
// for (let i = word.length - 1; i >= 0; i--) {
//     reverseWord += word[i];
// }
// console.log(reverseWord);
