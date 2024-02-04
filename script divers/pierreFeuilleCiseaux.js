"use strict";

var prompt = require("prompt-sync")();

let possibility = ["Pierre", "Feuille", "Ciseaux"];
let chiffre;
let ordiChiffre;
let player1 = 0;
let player2 = 0;

console.log("Score joueur 1 : " + player1 + " ");
console.log("Score joueur 2 : " + player2 + " ");
console.log("Bienvenue au jeu du Pierre, Feuille, Ciseaux !");
console.log("Veuillez entrer un chiffre entre 0 et 2");
console.log("0 -> Pierre, 1 -> Feuille, 2 -> Ciseaux");

while (player1 < 3 && player2 < 3) {
  ordiChiffre = possibility[Math.floor(Math.random() * 2)];
  console.log("-------------------------------");
  chiffre = Number(prompt("Entrez votre chiffre "));
  console.log("Vous avez choisi : " + possibility[chiffre]);
  console.log("L'ordinateur a choisi : " + ordiChiffre);

  if (
    (chiffre == 0 && ordiChiffre == "Feuille") ||
    (chiffre == 1 && ordiChiffre == "Ciseaux") ||
    (chiffre == 2 && ordiChiffre == "Pierre")
  ) {
    console.log("L'ordinateur a gagné 🤔");
    player2++;
    console.log("Votre score : " + player1);
    console.log("Score joueur 2 : " + player2);
  } else if (
    (chiffre == 0 && ordiChiffre == "Pierre") ||
    (chiffre == 1 && ordiChiffre == "Feuille") ||
    (chiffre == 2 && ordiChiffre == "Ciseaux")
  ) {
    console.log("Egalité 🙂");
  } else {
    console.log("Vous avez gagné ! 🤑");
    player1++;
    console.log("Votre score : " + player1);
    console.log("Score ordi : " + player2);
  }
}

if (player1 == 3 && player2 < player1) {
  console.log("Victoire du joueur 1🔫 ");
} else if (player2 == 3 && player1 < player2) {
  console.log("Victoire du joueur 2💣 ");
}
