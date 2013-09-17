//  http://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs
// https://github.com/marcoippolito/cheerio
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var csv = require('csv');
var w = require('./function_write.js');
    // self-executing function. While a callback function is a function created now but runs later, a self-executing function is created and immediately executed.
var url; var param;
exports.scrape = function(url, param, callback) {
  request(url, (function() {
    var companies = [];
    return function(err, resp, body) {
      if (err)
	throw err;
      $ = cheerio.load(body);
      $(param).each(function(i, elem) {
	companies.push($(this).text());
      });
      console.log(companies);
//      l = companies.length;
//      console.log(l);
      w.write('ucimu1.csv', companies);
      callback(companies);
    };
  })(url, param));
};
