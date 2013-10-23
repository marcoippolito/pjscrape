#!/usr/bin/env node

var s_call = require('./s_call.js');
var natural = require('natural');
var ndarray = require('./NDArray.js');
var scrape = s_call.scrape;
var tokenizer = new natural.WordTokenizer({pattern: /\s/}); //token are separated by white spaces //
var url;
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
    // rules for each number of tokens //
      switch (m) {
        case '2':
	  url = ndarray.matrix(n, 3, 'a');
 	  for (var k = 0; k < n; k++) {
	    url[k][0] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[0];
	    console.log(url[k][0]);
	    url[k][1] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[1];
	    console.log(url[k][1]);
	    url[k][2] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[0] + '-' + tokenized_new[1];
	    console.log(url[k][2]);
	  }
          break;
        case '>2':
     	  url = ndarray.matrix(n, 6, 'b');
//	for (var q = 0; q < n; q++) {
//	  url[q][0] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[0];
//	  console.log(url[q][0]);
//	  url[q][1] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[1];
//	  console.log(url[q][1]);
//	  url[q][2] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[2];
//	  console.log(url[q][2]);
//	  url[q][3] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[0] + '-' + tokenized_new[1];
//	  console.log(url[q][3]);
//	  url[q][4] = 'http://www.ucimu.it/en/catalogue/companies/' + tokenized_new[m-1];
//	  console.log(url[q][4]);
//	  url[q][5] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[m];
//	  console.log(url[q][5]);
//	}
        default:
	  url = ndarray.matrix(n, 1, 'c');
	  console.log(url);
//	for (var k =0; k < n; k++) {
//	  url[k][0] = 'http://www.ucimu.it/en/catalogue/companies/v/' + tokenized_new[0];
//	  console.log(url[k][0]);
//	}
      }
      console.log(tokenized_new);
      console.log(m);
    }
  }
//    console.log(tokenized_new);
//    console.log(tokenized_new.length);

});
