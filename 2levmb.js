#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

// var company_object = require('./company_object');
var company; var companyBranchName; var companyBranchAddress;
var togli = /$amp;/; var point = /\\.\\s/; var toEl = /<br>|\\s/g;
var nt = /\n|t/g; var ntn = /\t/g;

scrapeslmb = function(url) {

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
    // if url non correct jump to the end
    if (h2 == 'Item not found') {
      return;
    }
    else {
      //Extract company's name and headquarter's address//
      companyName = $('.page_title').text(); //companyName//
      var torm = /\n|\t/g;
      var companyName = companyName.replace(torm, '');
      companyName = companyName.replace(nt, '');
      companyName = companyName.replace(ntn, '');
      //console.log(companyName);
      companyHeadquarter = $('.street').html();
      if (! companyHeadquarter) {
	return;
      }
      else {
	// HEADQUARTER //
	companyHeadquarter = companyHeadquarter.replace(toEl, ' ' );
	companyHeadquarter = companyHeadquarter.replace(togli, '');
	companyHeadquarter = companyHeadquarter(point, '.');
      }
      //Extract name and address of each branch //
      //First detect number and names of branches //
      var count = [];
      $('.name').each(function(i, elem) {
	count[i] = $(this).text();
      });
      l = count.length;
      var urlsFewBranches = [];
      // If this company has a number of branches < 10 -> put its url in a separated array and do not extract name and address of the branches
      if (l < 10) {
	  urlsFewBranches.push(url);
      }
      else {
	//Extract and save name and address of each branch of the company //
	var companyBranch = []; var companyBranchAddress;
	for (var i = 0; i < l; i++) {
	  companyBranch[i] = {
	    companyBranchName : $('.name').eq(i).text(),
	    // the address has to be "cleaned" of <br>
	    companyBranchAddress : ($('.address').eq(i+1).html()).replace(toEl, ' ')
	  };
	}
      exports.getArray = urlsFewBranches;
       // Assign the data just extracted to the variable "company" //
      var company = new createcompany(companyName, companyHeadquarter, companyBranch);
      console.log(company);
    }
    }
  }
};

module.exports.scrapeslmb = scrapeslmb;
module.exports.company = company;
