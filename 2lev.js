#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

//var company_object = require('./company_object');
var company; var companyBranchName; var companyBranchAddress;

scrapesl = function(url) {

  request(url, querySelector);

  function querySelector (err, resp, body) {
  //  var createcompany = company_object.createcompany;
    function createcompany (){
      this.companyName = companyName;
      this.companyHeadquarter = companyHeadquarter;
      this.companyBranch = companyBranch;
    }

    if (err)
      throw err;
    $ = cheerio.load(body);
    var h2 = $('.editor').text();
  //  console.log(h2);
    if (h2 == 'Item not found') {
      return;
    }
    else {
      //Extract company's name and headquarter's address//
      companyName = $('.page_title').text(); //companyName//
      var torm = /\n|\t/g;
      var companyName = companyName.replace(torm, '');
      //console.log(companyName);
      companyHeadquarter = $('.street').html();
      if (! companyHeadquarter) {
	return;
      }
      else {
	var toEl = /<br>|\\s/g;
	// companyHeadquarter //
	companyHeadquarter = companyHeadquarter.replace(toEl, ' ' );
      }

      //Extract name and address of each branch //
      //First detect number and names of branches //
      var count = [];
      $('.name').each(function(i, elem) {
	count[i] = $(this).text();
      });
      l = count.length;
      var urlsManyBranches = [];
      // If this company has a number of branches>10 -> put its url in a separated array and do not extract name and address of the branches
      if (l > 10) {
	urlsManyBranches.push(url);
      }
      else {
	//Extract and save name and address of each branch of the company //
	var companyBranch = []; var torp = /<br>|\\s/g; var companyBranchAddress;
	for (var i = 0; i < l; i++) {
	  companyBranch[i] = {
	    companyBranchName : $('.name').eq(i).text(),
	    companyBranchAddress : ($('.address').eq(i+1).html()).replace(torp, ' ')
//	    companyBranchAddressNew : ($('.address').html()).replace(torp, ' ')
	  };

	}
      exports.getArray = urlsManyBranches;
       // Assign the data just extracted to the variable "company" //
      var company = new createcompany(companyName, companyHeadquarter, companyBranch);
      console.log(company);
    }
    }
  }
};

module.exports.scrapesl = scrapesl;
module.exports.company = company;
