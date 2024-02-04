"use strict";
var prompt = require("prompt-sync")();

// // VARIABLES
// var id;
// var mdp;
// var idBdd = "Batman";
// var mdpBdd = "mdp";
// var quit = false;
// var modifMdp = false;
// var choixMenu;

// console.log("1 -> Connexion 2 -> modifier mdp 3 -> quitter");
// // Debut algo
// while (!quit) {
//   if (!modifMdp) {
//     choixMenu = parseInt(prompt(""));
//   }

//   switch (choixMenu) {
//     case 1:
//       console.log("CONNEXION");
//       while (id != idBdd || mdp != mdpBdd) {
//         id = prompt("Saisissez un identifiant : ");
//         mdp = prompt("Saisissez un mot de passe : ");
//         if (id != idBdd) {
//           console.log("Mauvais identifiant");
//         } else if (mdp != mdpBdd) {
//           console.log("Mauvais mot de passe");
//         }
//       }
//       console.log("Bienvenue " + id);
//       quit = true;
//       break;
//     case 2:
//       console.log("MODIF MOT DE PASSE");
//       mdpBdd = prompt("Choisissez un nouveau mot de passe : ");
//       choixMenu = 1;
//       modifMdp = true;
//       break;
//     case 3:
//       quit = true;
//       break;
//     default:
//       break;
//   }
// }

var user = {
  nom: "Chams",
  prenom: "Eddine",
  email: "b@b.fr",
  mdp: "mdp",
  tabTest: [47110, "Sainte Livrade Sur Lot", "France "],
};

// for (const key in user) {
//   console.log(key + " : " + user[key]);
// }

// // console.log(user["tabTest"][1]);
// console.log(
//   `${user.nom} ${user.prenom} n'habite pas à ${user.tabTest[1]} en ${user.tabTest[2]}`
// );

// console.log(user);
// console.log(JSON.stringify(user));
const fs = require("fs");
console.log("ecriture");
fs.writeFileSync("./", JSON.stringify(user));

console.log("lecture");
var monObjetRecuperer = fs.readFileSync("./monFichier");
console.log(JSON.parse(monObjetRecuperer));
