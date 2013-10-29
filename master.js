#!/usr/bin/env node

var boh = require('./boh');
var wrapper = boh.wrapper;
var slev = require('./2lev.js');
var scrapesl = slev.scrapesl;

//var url = 'http://www.ucimu.it/en/catalogue/companies/v/adige/';
//scrapesl(url);

boh.wrapper(cb = function() {
  for (var i = 0; i < boh.getArray.length; i++) {
//    console.log('Ecco il contenuto del mio array:', boh.getArray[i]);
    scrapesl(boh.getArray[i]);
  }
});
