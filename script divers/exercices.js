"use strict";

// EXERCICE 1
// var prompt = require("prompt-sync")();

// var a = prompt("Saisissez le premier chiffre :");
// var b = prompt("Saisissez le deuxième chiffre :");
// var temp;

// temp = a;
// a = b;
// b = temp;

// console.log("A est égal à :" + a);
// console.log("B est égal à :" + b);
// //////////////////////////////////////////////////////////////

//EXERCICE 2
// var prompt = require("prompt-sync")();

// let a = Number(prompt("Saisissez A :"));
// let b = Number(prompt("Saisissez B :"));
// let c = Number(prompt("Saisissez C :"));

// a = a + b + c;
// b = a - (b + c);
// c = a - (b + c);
// a = a - (b + c);

// console.log("A est égal à : " + a);
// console.log("B est égal à : " + b);
// console.log("C est égal à : " + c);
// ////////////////////////////////////////////////////

// EXERCICE 3

// var prompt = require("prompt-sync")();
// let a = 0;

// while (a !== 10) {
//   a = Number(prompt("Saisissez A :"));
// }
// //////////////////////////////////////////////////////////

// EXERCICE 4
// var prompt = require("prompt-sync")();
// let chiffreOrdi = Math.floor(Math.random() * 10);
// let chiffreUser = Number(prompt("Entrez votre chiffre :"));

// while (chiffreUser !== chiffreOrdi) {
//   if (chiffreUser < chiffreOrdi) {
//     console.log("Trop Petit 😭");
//     chiffreUser = Number(prompt("Entrez votre chiffre :"));
//   } else if (chiffreUser > chiffreOrdi) {
//     console.log("Trop Grand 😥");
//     chiffreUser = Number(prompt("Entrez votre chiffre :"));
//   }
// }
// console.log("Félicitations 👏");
// ////////////////////////////////////////////////////////////

// EXERCICE 5:

// var prompt = require("prompt-sync")();

// let guessOrdi;

// let answerHuman;

// function randomIntFromInterval(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// guessOrdi = randomIntFromInterval(0, 10);

// console.log("Veuillez penser à un chiffre entre 0 et 10 :");

// console.log("Est-ce votre chiffre ? ->  " + guessOrdi);

// console.log(
//   "Entrez votre réponse : (indiquez 'trop petit' ou 'trop grand', ou 'oui' si c'est votre chiffre) "
// );

// answerHuman = prompt("Votre réponse : ");

// while (answerHuman != "oui") {
//   if (answerHuman == "trop petit") {
//     guessOrdi = randomIntFromInterval(guessOrdi + 1, 10);

//     answerHuman = prompt("Est-ce votre chiffre ? ->  " + guessOrdi + " ");
//   } else if (answerHuman == "trop grand") {
//     guessOrdi = randomIntFromInterval(0, guessOrdi - 1);

//     answerHuman = prompt("Est-ce votre chiffre ? ->  " + guessOrdi + " ");
//   }
// }

// if (answerHuman == "oui") console.log("Félicitations à l'ordi👏");

// //////////////////////////////////////////////////////////////////
// EXERCICE 6
// var prompt = require("prompt-sync")();
// let n = Number(prompt("Entrez votre nombre : "));

// if (n % 2 == 0) {
//   n /= 2;
//   console.log(n);
// } else {
//   n = n * 3 + 1;
//   console.log(n);
// }
// /////////////////////////////////////////////////////////////////////

//  EXERCICE 7
// var prompt = require("prompt-sync")();
// let str = "";
// let taille = Number(prompt("Entrez votre nombre : "));

// for (let i = 1; i <= taille; i++) {
//   for (let j = 1; j <= taille; j++) {
//     if (i === j || i + j === taille + 1) {
//       str += " X ";
//     } else {
//       str += " . ";
//     }
//   }
//   str += "\n";
// }
// console.log(str);
