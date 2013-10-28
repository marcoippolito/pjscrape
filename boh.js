#!/usr/bin/env node

var s_call = require('./s_call.js');
var natural = require('natural');
var uniqueinarray = require('./uniqueinarray.js');
var unique = uniqueinarray.unique;
//var ndarray = require('./NDArray.js');
//var scrape = s_call.scrape;
var tokenizer = new natural.WordTokenizer({pattern: /\s/}); //tokens are separated by white spaces //
var url = [];
var urls_array = [];

s_call.scrape (function callback() {
  // tokenization of s_call.getArray //
  var n = s_call.getArray.length;
  for (var i = 0; i < n; i++) {
//    console.log(s_call.getArray[i]);
    var tokenized = tokenizer.tokenize(s_call.getArray[i]);
    var m = tokenized.length;
    var tokenized_new = [];
    // remove "." within each token //
    for (var j = 0; j < m; j++) {
      var toEl = /\./g;
      tokenized_new[j] = tokenized[j].replace(toEl, "");
    //All possible urls are generated and saved in "urls_array" array //
      url[i] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[j];
      urls_array.push(url[i]);
      url[i] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[0] + '-' + tokenized_new[1];
      urls_array.push(url[i]);

    }
  }
  var urls_array_new = urls_array.unique();
  console.log(urls_array_new);
  console.log(urls_array_new.length);

});

//module.exports.s_call.scrape = s_call.scrape;
