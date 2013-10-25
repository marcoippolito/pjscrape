#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//var company_object = require('./company_object');
//var createcompany = company_object.createcompany;
var companyMainAddress; var companyBranchName; var companyBranchAddress;
var url ='http://www.ucimu.it/catalogo/imprese/v/cosberg/';

//scrape = function(url, param) {
//  request();
//};

request(url, querySelector);

function querySelector (err, resp, body) {

  function createcompany (){
    this.companyName = companyName;
    this.companyMainAddress = companyMainAddress;
    this.companyBranch = createcompanyBranch();
  }

  function createcompanyBranch() {
//    this.companyBranch = companyBranch;
    this.companyBranch = [];
    this.companyBranchName = companyBranchName;
    this.companyBranchAddress = companyBranchAddress;
  }

  if (err)
    throw err;
  $ = cheerio.load(body);
  //Extract company's name and headquarter's address//
  companyName = $('.page_title').text(); //companyName//
  console.log(companyName);
  companyHeadquarter = $('.street').html();
  var toEl = /<br>/;
  var companyMainAddress = companyHeadquarter.replace(toEl, " "); //companyMainAddress//
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
    companyBranch.push(companyBranch[i]);
//    return companyBranch;
//    var company = new createcompany(companyName, companyMainAddress, companyBranch);
//    console.log(company);

  }
  console.log(companyBranch);
//  var companyBranch = new createcompanyBranch(companyBranchName, companyBranchAddress);
  var company = new createcompany(companyName, companyMainAddress, companyBranch);
  console.log(company);

}

module.exports.request = request;
