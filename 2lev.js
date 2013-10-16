#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var company_object = require('./company_object');
var Company = company_object.Company;
var companyBranch = Company.companyBranch;
//var readwrite = require('./read_g');
var url ='http://www.ucimu.it/catalogo/imprese/v/cosberg/';
//var param = 'street';

//scrape = function(url, param) {
//  request();
//};

request(url, querySelector);

function querySelector (err, resp, body) {
  var company = new Company();
  if (err)
    throw err;
  $ = cheerio.load(body);
  //Extract company's name and headquarter's address//
  companyName = $('.page_title').text();
  console.log(companyName);
  companyMainAddress = $('.street').html();
  var toEl = /<br>/;
  var newAddress = companyMainAddress.replace(toEl, " ");
  console.log(newAddress);
  //Extract name and address of each branch //
  // First detect number and names of branches //
  var count = [];
  $('.name').each(function(i, elem) {
    count[i] = $(this).text();
  });
  l = count.length;
  // Extract and save name and address of each branch of the company //
  for (var i = 0; i < l; i++) {
    companyBranch[i] = {
      compayBranchName: $('.name').eq(i).text(),
      companyBranchAddress: $('.address').eq(i+1).text()
    };
  console.log(companyBranch[i]);
  }

}

module.exports.request = request;
