#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//var company_object = require('./company_object');
//var createcompany = company_object.createcompany;
var company; var companyBranchName; var companyBranchAddress;
var url ='http://www.ucimu.it/catalogo/imprese/v/cosberg/';

//scrape = function(url, param) {
//  request();
//};

request(url, querySelector);

function querySelector (err, resp, body) {

  function createcompany (){
    this.companyName = companyName;
    this.companyHeadquarter = companyHeadquarter;
    this.companyBranch = companyBranch;
  }

  if (err)
    throw err;
  $ = cheerio.load(body);
  //Extract company's name and headquarter's address//
  companyName = $('.page_title').text(); //companyName//
  var torm = /\n|\t/g;
  var companyName = companyName.replace(torm, '');
//  console.log(companyName);
  companyHeadquarter = $('.street').html();
  var toEl = /<br>|\\\s/g;
  var companyHeadquarter = companyHeadquarter.replace(toEl, '' ); //companyMainAddress//

//  console.log(companyMainAddress);
  //Extract name and address of each branch //
  // First detect number and names of branches //
  var count = [];
  $('.name').each(function(i, elem) {
    count[i] = $(this).text();
  });
  l = count.length;
  // Extract and save name and address of each branch of the company //
  var companyBranch = [];
  for (var i = 0; i < l; i++) {
    companyBranch[i] = {
      companyBranchName: $('.name').eq(i).text(),
      companyBranchAddress: $('.address').eq(i+1).text()
    };
  }
  // Assign the data just extraced to the variable "company" //
  var company = new createcompany(companyName, companyHeadquarter, companyBranch);
  console.log(company);

}

module.exports.request = request;
module.exports.company = company;
