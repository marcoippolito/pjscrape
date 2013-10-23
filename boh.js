#!/usr/bin/env node

var s_call = require('./s_call.js');
var natural = require('natural');
var scrape = s_call.scrape;
var url = [];
var tokenizer = new natural.WordTokenizer({pattern: /\s/});
s_call.scrape (function () {
  for (var i =0; i < s_call.getArray.length; i++) {
    console.log(s_call.getArray[i]);
    console.log(tokenizer.tokenize(s_call.getArray[i]));


  }
});
