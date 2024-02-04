'use strict';


var prompt = require("prompt-sync")();

let id = "jonathan";
let password = "pfffff";
let newPassword = "";

console.log("1 -> Connexion 2 -> Changer mdp 3 -> Quitter");
let menu = Number(prompt("Que veux tu faire ? "));

while (menu !== 3) {
  if (menu == 1) {
    let userId = prompt("Veuillez saisir votre identifiant : ");
    let userPassword = prompt("Veuillez saisir votre mot de passe : ");

    if (userId == id && userPassword == password) {
      console.log("Bievenue");
      menu = prompt("Que veux tu faire ? ");
    }

    while (userId !== id || userPassword !== password) {
      if (userId == id && userPassword !== password) {
        console.log("Votre mot de passe est incorrect");
        console.log("Veuillez réessayer ");
        userPassword = prompt("Veuillez entrer votre mot de passe :");
      } else if (userId !== id && userPassword == password) {
        console.log("Votre identifiant est incorrect ");
        console.log("Veuillez réessayer : ");
        userId = prompt("Entrez votre identifiant : ");
      }
    }
  } else if (menu == 2) {
    console.log("Nouveau mot de passe... ");
    newPassword = prompt("Veuillez entrer votre nouveau mot de passe : ");
    password = newPassword;
    menu = 1;
  } else {
    break;
  }
}