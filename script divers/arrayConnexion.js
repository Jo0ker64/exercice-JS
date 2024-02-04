"use strict";

var prompt = require("prompt-sync")();

const id = ["luffy", "zoro", "sanji", "nami", "yamato"];
const password = ["monkey", "katana", "nami", "argent", "oden"];

console.log("1 -> Connexion 2 -> Changer Mdp 3 -> Quitter");
let menu = Number(prompt("Que voulez vous faire ? "));

while (menu !== 3) {
  if (menu == 1) {
    console.log("Veuillez entrer vos identifiants de connexion... ");
    let identifiant = prompt("Veuillez saisir votre identifiant : ");
    let mdp = prompt("Veuillez saisir votre mot de passe : ");
    for (let i = 0; i <= 5; i++) {
      if (identifiant == id[i] && mdp == password[i]) {
        console.log("Bienvenue 🎄");
        menu = Number(prompt("Que souhaitez vous faire ? "));
      } else if (identifiant == id[i] && mdp !== password[i]) {
        console.log("Mot de passe incorrect ");
      } else if (mdp == password[i] && identifiant !== id[i]) {
        console.log("Identifiant incorrect ");
      }
    }
  } else if (menu == 2) {
    console.log("Quel est votre identifiant ? ");
    let identifiant = prompt("Saisir votre id :");
    for (let x = 0; x <= 5; x++) {
      if (identifiant == id[x]) {
        console.log("Quel mdp voulez vous?");
        let newPassword = prompt("Entrez votre nouveau mot de passe : ");
        password[x] = newPassword;
        menu = 1;
      }
    }
  } else if (menu == 3) {
    break;
  }
}
