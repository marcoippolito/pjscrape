#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var readwrite = require('./read_g');

var url = 'http://www.ucimu.it/catalogo/imprese/elenco/';
var param = 'a[href^="catalogo/imprese"]';

scrape = function(url, param) {
  request();
};

var myArray = [];

request(url, querySelector);

function querySelector (err, resp, body) {
  if (err)
    throw err;
  $ = cheerio.load(body);
  $(param).each(function(i, elem) {
    myArray.push($(this).text());
  });
//  console.log(myArray);
//  var l= myArray.length;
//  console.log(l);
  fs.writeFile("ucimulist.csv", myArray, function (err) {
    if (err) throw err;
    console.log('It\'s saved');
  });
}
var prova = './ucimulist.csv';
readwrite.fromfiletoarray(prova); 
module.exports.querySelector = querySelector;
