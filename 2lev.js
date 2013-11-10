#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var geonodermaster = require('./geonodermaster.js');
var geoNoder = geonodermaster.geoNoder;
var lat = geoNoder.lat; var long = geoNoder.long;
// var company_object = require('./company_object');
var company; var companyBranchName; var companyBranchAddress;
var togli = /&amp;/; var point = /\\.\\s/; var toEl = /<br>|\\s/g;
var nt = /\n|t/g; var ntn = /\t/g;
var address;

scrapesl = function(url) {

  function addressclean(address) {
    address = address.replace(toEl, ' ');
    address = address.replace(togli, '');
    address = address.replace(point, '.');
    return address;
  }

  request(url, querySelector);

  function querySelector (err, resp, body) {
  //  var createcompany = company_object.createcompany;
    function createcompany (){
      this.companyName = companyName;
      this.companyHeadquarter = companyHeadquarter;
      this.companyHeadquarterGeo = companyHeadquarterGeo;
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
      var companyName = companyName.replace(toEl, '');
      companyName = companyName.replace(nt,'');
      companyName = companyName.replace(ntn,'');
      //console.log(companyName);
      companyHeadquarter = $('.street').html();
      if (! companyHeadquarter) {
	return;
      }
      else {
     // HEADQUARTER //
	companyHeadquarter = addressclean(companyHeadquarter);
//	companyHeadquarter = companyHeadquarter.replace(toEl, ' ' );
//	companyHeadquarter = companyHeadquarter.replace(togli,'');
//	companyHeadquarter = companyHeadquarter.replace(point,'.');
	companyHeadquarterGeo = geoNoder(companyHeadquarter);
      }
     // BRANCHES //
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
	var companyBranch = []; var companyBranchAddress;
	for (var i = 0; i < l; i++) {
	  companyBranch[i] = {
	    companyBranchName : $('.name').eq(i).text(),
	    // the address has to be "cleaned" of <br>
	    companyBranchAddress : ($('.address').eq(i+1).html()).replace(toEl, ' ')
	  };
	}
      exports.getArray = urlsManyBranches;
       // Assign the data just extracted to the variable "company" //
      var company = new createcompany(companyName, companyHeadquarter, companyHeadquarterGeo, companyBranch);
      console.log(company);
    }
    }
  }
};

module.exports.scrapesl = scrapesl;
module.exports.company = company;
