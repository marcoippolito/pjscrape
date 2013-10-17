#!/usr/bin/env node

var myArray = [];
funzione = function (a) {
      myArray.push(a);
};
funzione("mario");
module.exports.funzione = funzione;
exports.getArray = myArray;
