#!/usr/bin/env node

var s_call = require('./s_call.js');
var natural = require('natural');
var scrape = s_call.scrape;
var url = [];
var tokenizer = new natural.WordTokenizer({pattern: /\s/}); //token are separated by white spaces //
s_call.scrape (function () {
  // tokenization of s_call.getArray //
  for (var i = 0; i < s_call.getArray.length; i++) {
    console.log(s_call.getArray[i]);
    var tokenized = tokenizer.tokenize(s_call.getArray[i]);
    console.log(tokenized);
    console.log(tokenized.length);
    var tokenized_new = [];
    for (var j = 0; j < tokenized.length; j++) {
      var toEl = /\./g;
      tokenized_new[j] = tokenized[j].replace(toEl, "");
    }
    console.log(tokenized_new);
  }
});
