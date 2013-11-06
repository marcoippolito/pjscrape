#!/usr/bin/env node

var slev = require('./2lev');
var scrapesl = slev.scrapesl;
var boh = require('./boh');
var wrapper = boh.wrapper;
var fs = require('fs');

boh.wrapper(function() {
  var result = boh.getArray.map(scrapesl);
  console.log(result);
});
