#!/usr/bin/env node

var miofile = require('./file1.js');
//miofile.somma(4, 2);
//miofile.somma(1, 3);

//miofile.getArray.push(1);

for (var i =0; i < miofile.getArray.length; i++) {
  console.log('Ecco il contenuto del mio array: ', miofile.getArray[i]);
}
