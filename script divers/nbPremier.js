"use strict";

var prompt = require("prompt-sync")();
let NombreUser = "";
let cont = 0;

console.log("Choisissez un nombre !");
NombreUser = prompt("Entrez le ici : ");

for (let i = 1; i <= NombreUser; i++) {
  if (NombreUser % i == 0) {
    cont = cont + 1;
  }
}

if (cont == 2) {
  console.log(NombreUser + " est un nombre premier");
} else {
  console.log(NombreUser + " n'est pas un nombre premier");
}
