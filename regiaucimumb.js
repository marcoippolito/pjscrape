#!/usr/bin/env node

var slevmb = require('./2levmb');
var scrapeslmb = slevmb.scrapeslmb;
var boh = require('./boh');
var wrapper = boh.wrapper;

function swrappermb () {
  boh.wrapper(function() {

    for (var k = 0; k < boh.getArray.length; k++) {
      scrapeslmb(boh.getArray[k]);
    }
  });
}

//swrappermb();

module.exports.swrappermb = swrappermb;
