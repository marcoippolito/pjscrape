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
company = {};

function querySelector (err, resp, body) {

  if (err)
    throw err;
  $ = cheerio.load(body);
  company.name = $('.page_title').text();
  console.log(company.name);
  company.address = $('.street').html();
  var toEl = /<br>/;
  var newAddress = company.address.replace(toEl, " ");
  console.log(newAddress);
  var count = [];
  $('.name').each(function(i, elem) {
    count[i] = $(this).text();
  });
  console.log(count);

//    company.branch = {
//      name: $('.name').text(),
//      address: $('.address').html()

//    console.log(company.branch);
//  });

}
