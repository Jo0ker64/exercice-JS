"use strict";

let lettre = [
  "alpha",
  "bravo",
  "charlie",
  "delta",
  "echo",
  "foxtrot",
  "golf",
  "hotel",
  "india",
  "juliet",
  "kilo",
  "lima",
  "mike",
  "november",
  "oscar",
  "papa",
  "quebec",
  "romeo",
  "sierra",
  "tango",
  "uniform",
  "victor",
  "whiskey",
  "x-ray",
  "yankee",
  "zulu",
];

let mot = "anticonstitutionellement";

for (let x = 0; x < mot.length; x++) {
  for (let y = 0; y < lettre.length; y++) {
    if (mot.charAt(x) == lettre[y].charAt(0)) {
      console.log(lettre[y]);
    }
  }
}
