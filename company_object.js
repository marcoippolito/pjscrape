var company; var companyBranch;
function Company (company) {
  company = {
    companyName: 'companyName',
    companyMainAddress: 'companyHeadquarter',
    companyBranch: {
      companyBranchName: 'companyBranchName',
      companyBranchAddress: 'companyBranchAddress'
    }
  };
}

module.exports.Company = Company;
module.exports.company = company;
module.exports.companyBranch = companyBranch;
