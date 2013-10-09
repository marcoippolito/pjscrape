#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var readwrite = require('./read_g');

var url = 'http://www.ucimu.it/catalogo/imprese/elenco/';
var param = 'a[href^="catalogo/imprese"]';
var myArray =[];
var outputfile = 'ucimulist.csv';
scrape = function(url, param) {
  request();
};

request(url, querySelector);

function querySelector (err, resp, body) {
  if (err)
    throw err;
  $ = cheerio.load(body);
  $(param).each(function(i, elem) {
      myArray.push($(this).text());
  });
  for (var i = myArray.length-1; i--;) {
    if (myArray[i] === 'Catalogo' || myArray[i] === 'Imprese Associate' || myArray[i] === 'Elenco completo' || myArray[i] === 'Elenco Completo' || myArray[i] === '\n\t\t\t\t\t\n\t\t\t\t' || myArray[i] === '\n\t\t\t\t\t\n\t\t\t\t' ) myArray.splice(i, 1);
  }
//  console.log(myArray);
//  var l= myArray.length;
//  console.log(l);
  fs.writeFile(outputfile, myArray, function (err) {
    if (err) throw err;
    console.log('It\'s saved in: ' + outputfile);
  });
}

var prova = './ucimulist.csv';

readwrite.fromfiletoarray(prova);
module.exports.querySelector = querySelector;
