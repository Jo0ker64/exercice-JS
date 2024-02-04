"use strict";

var chaineY = ["ABACAABED"];
var chaineX = ["ZAAB"];
var ok = true;

for (let i = 0; i < chaineX.length; i++) {
  if (chaineY.includes(chaineX[i], i)) {
    chaineY = chaineY.slice(i, chaineY.length);
  } else {
    ok = false;
  }
}
console.log(ok);
