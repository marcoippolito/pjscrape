//   Easy Web Scraping With Node.js - miguelgrinberg //
//  http://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs /

var request = require('request');
var cheerio = require('cheerio');

// the scope of JS functions is defined at the time the function is created.//

//for (pool in pools) {
var url = 'http://www.ucimu.it/catalogo/imprese/elenco/';
    // self-executing function. While a callback function is a function created now but runs later, a self-executing function is created and immediately executed.
    // Whatever this function will returns will be the result of the while expression
request(url, (function() {
  return function(err, resp, body) {
    if (err)
      throw err;
    else
      $ = cheerio.load(body);
      // TODO: scraping goes here!
      // First, locate the <href> element that defines a company //
      var companies = [];
      $('a[href^="catalogo/imprese"]').each(function(i, elem) {
	companies[i] = $(this).text();
      });

      companies.join(', ');
     console.log(companies);
  };
}));
