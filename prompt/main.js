// run node prompt/main.js
const pdv = require("../engine/Pdv/pdv");
const products = pdv.findAll();
console.table(products);