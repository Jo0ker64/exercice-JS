"use strict";

// 1)
// let notes = [2, 5, 9, 12, 11, 15, 13, 19, 0, 10];
// let data = 0;

// for (let i = 0; i < notes.length; i++) {
//   data += notes[i];
// }
// data /= notes.length;
// console.log(data);

// 2) je n'ai pas réussi

// 3)
let tva;
let total;
let notes = [10, 120, 25, 60, 30, 15, 500, 3000, 2];

for (let x = 0; x < notes.length; x++) {
  console.log("Voici le prix hors taxes : " + notes[x]);
  tva = notes[x] * 0.2;
  console.log("Voici la tva : " + tva);
  total = notes[x] + tva;
  console.log("Voici le prix total : " + total);
  console.log("---------------------");
}
