var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var csv = require('csv');
var w = require('./function_write.js');

var url = 'http://www.ucimu.it/catalogo/imprese/elenco/';
var param = 'a[href^="catalogo/imprese"]';

exports.scrape = function(url, param) {
  request();
};

var companies = [];

request(url, querySelector);

function querySelector(err, resp, body) {
  if (err)
    throw err;
  $ = cheerio.load(body);
  $(param).each(function(i, elem) {
    companies.push($(this).text());
  });
  w.write('ucimu2.csv', companies);
  console.log(companies);
  var l= companies.length;
  console.log(l);
}
