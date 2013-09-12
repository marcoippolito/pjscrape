//  http://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs
// https://github.com/marcoippolito/cheerio
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
// the scope of JS functions is defined at the time the function is created.//
//for (pool in pools) {
var url = 'http://www.ucimu.it/catalogo/imprese/elenco/';
    // self-executing function. While a callback function is a function created now but runs later, a self-executing function is created and immediately executed.
    // Whatever this function will returns will be the result of the while expression
var companies = [];
request(url, ( function() {
  return function(err, resp, body) {
    if (err)
      throw err;
    $ = cheerio.load(body);
    $('a[href^="catalogo/imprese"]').each(function(i, elem) {
      companies[i] = $(this).text();
      console.log($(this).text());
      str = companies[i];
      fs.appendFile('ucimu1.txt', 'str', function (err) {
	if (err) throw err;
	console.log('data appended');
      });
    });
  };
})());
//console.log(companies);
// output: file text

//var fmt = function(companies_array) {
//  companies_array.join(",");
//};

//var outfile = 'ucimu1.txt';
//var out = fmt(companies);
//console.log(out);
//fs.writeFile(outfile,out, function (err)) {
//  if (err) throw err;
//  console.log('It\'s saved!');
//});
