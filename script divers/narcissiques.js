"use strict";

var prompt = require("prompt-sync")();

var nombreUser = prompt("Saisissez un chiffre : ");
var somme = 0;

for (let i = 0; i < nombreUser.length; i++) {
  const nb = Number(nombreUser[i]);
  somme += Math.pow(nb, nombreUser.length);
}

if (somme === Number(nombreUser)) {
  console.log("Le nombre est bien narcissique");
} else {
  console.log("Le nombre n'est pas narcisique");
}
