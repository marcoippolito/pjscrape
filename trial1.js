//  http://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs
// https://github.com/marcoippolito/cheerio
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var csv = require('csv');
// the scope of JS functions is defined at the time the function is created.//
//for (pool in pools) {
var url = 'http://www.ucimu.it/catalogo/imprese/elenco/';
    // self-executing function. While a callback function is a function created now but runs later, a self-executing function is created and immediately executed.
    // Whatever this function will returns will be the result of the while expression
// var companies = [];
request(url, ( function() {
  var companies = [];
  return function(err, resp, body) {
    if (err)
      throw err;
    $ = cheerio.load(body);
    $('a[href^="catalogo/imprese"]').each(function(i, elem) {
      companies.push($(this).text());
      console.log($(this).text())|
      fs.writeFile('ucimu1.txt',companies, function (err) {
        if (err) throw err;
//        console.log('It\'s saved' + companies.length);
      });
    });
//  return companies;
  };
  })());

// fetch data from level-2 sites //
// for (var i = 1; i <= length(companies)
