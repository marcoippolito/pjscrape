#!/usr/bin/env node

var s_call = require('./s_call.js');
var scrape = s_call.scrape;
var natural = require('natural');
var fs = require('fs');
var uniqueinarray = require('./uniqueinarray.js');
var unique = uniqueinarray.unique;
var slev = require('./2lev');
var scrapesl = slev.scrapesl;
var tokenizer = new natural.WordTokenizer({pattern: /\s/}); //tokens are separated by white spaces //
var indexof = require('./indexof.js');
var removeElemIfWord = indexof.removeElemIfWord;
var url = [];
var urls_array = [];
var word = 'undefined';
var word2 = 'mcm';

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

    // remove from the urls_array_new the elements containing the word "undefined"
    removeElemIfWord(urls_array_new, word);
    removeElemIfWord(urls_array_new, word2);
    // sort urls_array_new elements in alphabetic order
    urls_array_new.sort();

    exports.getArray = urls_array_new;

    cb();

  });
};

module.exports.wrapper = wrapper;
