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

request(url, ( function() {
  var companies = [];
  return function(err, resp, body) {
    if (err)
      throw err;
    $ = cheerio.load(body);
    $('a[href^="catalogo/imprese"]').each(function(i, elem) {
      companies.push($(this).text());
    });
    console.log(companies);
    l = companies.length;
    console.log(l);
    require('./function_write.js')('ucimu1.csv', companies);

//fetch data from level-2 sites //
    for (var i = 0;i < l; i++) {
      var url = 'http://www.ucimu.it/catalogo/imprese/v/' + companies[i];
      console.log(url);

    }
  };
})());
