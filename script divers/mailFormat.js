"use strict";

let nom2famille;
let mailModel;
let initiale;
let mail;
const noms = [
  "Brayan Capet",
  "Marty McFly",
  "John Wick",
  "Luke Skywalker",
  "Steve Rodgers",
  "Zoro Roronoa",
  "Sanji Vinsmoke",
];

for (let x = 0; x < noms.length; x++) {
  initiale = noms[x].charAt(" ").toLowerCase();
  mail = noms[x].indexOf(" ") + 1;
  nom2famille = noms[x].substr(mail).toLowerCase();
  mailModel = initiale + "." + nom2famille + "@intech-sud.fr";
  console.log(mailModel);
}
