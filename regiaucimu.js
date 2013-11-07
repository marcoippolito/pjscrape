#!/usr/bin/env node

var slev = require('./2lev');
var scrapesl = slev.scrapesl;
var boh = require('./boh');
var wrapper = boh.wrapper;
var fs = require('fs');

function swrapper () {
  boh.wrapper(function() {

    for (var k = 0; k < boh.getArray.length; k++) {
      scrapesl(boh.getArray[k]);
    }
  });
}

//swrapper();

module.exports.swrapper = swrapper;
