var companyName; var companyMainAddress; var companyBranch = [];
var companyBranchName;
var companyBranchAddress;

function Company(companyName, companyMainAddress, companyBranch, companyBranchName, companyBranchAddress) {

  this.companyName = companyName;
  this.companyMainAddress = companyMainAddress;
  this.companyBranch = companyBranch;
}

module.exports.Company = Company;
module.exports.Company.companyMainAddress = companyMainAddress;
module.exports.Company.companyBranch = companyBranch;
module.exports.Company.companyName = companyName;
