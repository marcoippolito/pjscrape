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
var companyName; var companyMainAddress; var companyBranch;
function Company(companyName, companyMainAddress, companyBranch) {
  this.companyName = companyName;
  this.companyMainAddress = companyMainAddress;
  function Branch(companyBranchName, companyBranchAddress) {
    this.companyBranch.name = companyBranch.name;
    this.companyBranch.address = companyBranch.address;
  }
}
function querySelector (err, resp, body) {
  var company = new Company(companyName, companyMainAddress, companyBranch);
  if (err)
    throw err;
  $ = cheerio.load(body);
  companyName = $('.page_title').text();
  console.log(companyName);
  companyMainAddress = $('.street').html();
  var toEl = /<br>/;
  var newAddress = companyMainAddress.replace(toEl, " ");
  console.log(newAddress);
  var count = [];
  $('.name').each(function(i, elem) {
    count[i] = $(this).text();
  });
  company.branch = [];
  for (var i = 0; i < count.length; i++) {
    company.branch[i] = {
      name: $('.name').eq(i).text(),
      address: $('.address').eq(i+1).text()
    };
  console.log(company.branch[i]);
  }

}
