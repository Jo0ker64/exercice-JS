"use strict";

let possibility =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let password = "";

console.log("Voici votre nouveau mot de passe : ");
for (let i = 0; i < 7; i++) {
  password += possibility.charAt(Math.floor(Math.random() * 62));
}
console.log(password);
