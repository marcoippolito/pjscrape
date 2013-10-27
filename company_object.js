#!/usr/bin/env node

var companyName; var companyHeadquarter; var companyBranch;

function createcompany (){
  this.companyName = companyName;
  this.companyHeadquarter = companyHeadquarter;
  this.companyBranch = companyBranch;
}

module.exports.createcompany = createcompany;
module.exports.companyHeadquarter = companyHeadquarter;
module.exports.companyBranch = companyBranch;
