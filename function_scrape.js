#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var csv = require('csv');
var w = require('./function_write.js');

var url = 'http://www.ucimu.it/catalogo/imprese/elenco/';
var param = 'a[href^="catalogo/imprese"]';

scrape = function(url, param) {
  request();
};

var myArray = [];

request(url, querySelector);

function querySelector(err, resp, body) {
  if (err)
    throw err;
  $ = cheerio.load(body);
  $(param).each(function(i, elem) {
    myArray.push($(this).text());
  });
  w.write('ucimu2.csv', myArray);
  console.log(myArray);
  var l= myArray.length;
  console.log(l);
}

module.exports.scrape = scrape;
module.exports.myArray = myArray;
