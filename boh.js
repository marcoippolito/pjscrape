#!/usr/bin/env node

var s_call = require('./s_call.js');
var scrape = s_call.scrape;

s_call.scrape (function () {
  for (var i =0; i < s_call.getArray.length; i++) {
      console.log('Ecco il contenuto del mio array: ', s_call.getArray[i]);
  }
});
