#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//var readwrite = require('./read_g');
var url ='http://www.ucimu.it/catalogo/imprese/v/cosberg/';
//var param = 'street';

//scrape = function(url, param) {
//  request();
//};

request(url, querySelector);

function querySelector (err, resp, body) {
  var array = [];
  if (err)
    throw err;
  $ = cheerio.load(body);
  var company_name = $('.page_title').text();
  console.log(company_name);
  var address = $('.street').html();
  var toEl = /<br>/;
  var newAddress = address.replace(toEl, " ");
  console.log(newAddress);
}
