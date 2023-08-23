// node runner/main.js
const pdv = require("../engine/pdv");
const products = pdv.findAll();
console.table(products);