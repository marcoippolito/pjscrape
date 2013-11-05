#!/usr/bin/env node

var s_call = require('./s_call.js');
var scrape = s_call.scrape;
var natural = require('natural');
var uniqueinarray = require('./uniqueinarray.js');
var unique = uniqueinarray.unique;
var slev = require('./2lev');
var scrapesl = slev.scrapesl;
var tokenizer = new natural.WordTokenizer({pattern: /\s/}); //tokens are separated by white spaces //
var url = [];
var urls_array = [];

wrapper = function (cb) {
  scrape (function callback() {
    // tokenization of s_call.getArray //
    var n = s_call.getArray.length;
    for (var i = 0; i < n; i++) {
  //    console.log(s_call.getArray[i]);
      var tokenized = tokenizer.tokenize(s_call.getArray[i]);
      var m = tokenized.length;
      var tokenized_new = [];
      // remove "." within each token //
      for (var j = 0; j < m; j++) {
	var toEl = /\.|'/g;
	tokenized_new[j] = tokenized[j].replace(toEl, "");
	tokenized_new[j] = tokenized_new[j].toLowerCase();
      //All possible urls are generated and saved in "urls_array" array //
	url[i] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[j];
	urls_array.push(url[i]);
	url[i] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[0] + '-' + tokenized_new[1];
	urls_array.push(url[i]);
      }
    }
    var urls_array_new = urls_array.unique();
    var ul = urls_array_new.length;
//    console.log(ul);
//    console.log(urls_array_new);

    exports.getArray = urls_array_new;

    cb();

  });
};

module.exports.wrapper = wrapper;
