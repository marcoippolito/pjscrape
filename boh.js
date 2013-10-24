#!/usr/bin/env node

var s_call = require('./s_call.js');
var natural = require('natural');
//var ndarray = require('./NDArray.js');
var request = require('request');
var scrape = s_call.scrape;
var tokenizer = new natural.WordTokenizer({pattern: /\s/}); //tokens are separated by white spaces //
var url = [];
var urls_array = [];


// function to check the correctness of the url //
var urlResponse = function(url){
    rest.get(url).on('complete', function(result) {
	if (result != Error) {
	  urls_array.push(url);
	}

    });
};

s_call.scrape (function () {
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
    //Rules for each number of tokens //
	    url[i] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[j];
	    urls_array.push(url[i]);
	    url[i] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[0] + '-' + tokenized_new[1];
	    urls_array.push(url[i]);

    }
  }
console.log(urls_array);
console.log(urls_array.length);
});
