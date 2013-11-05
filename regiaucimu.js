#!/usr/bin/env node

var slev = require('./2lev');
var scrapesl = slev.scrapesl;
var boh = require('./boh');
var wrapper = boh.wrapper;
var fs = require('fs');

boh.wrapper(function() {

  for (var k = 0; k < boh.getArray.length; k++) {
//    console.log(boh.getArray[k]);
    scrapesl(boh.getArray[k]);
  }

});
