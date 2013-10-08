var fs = require('fs');
var companyLinks = [];
var outputfile;

function fromfiletoarray (outputfile) {

  fs.readFile(outputfile, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    companyLinks = data.toString().split(',');
    console.log(companyLinks.length);
    console.log(companyLinks);
  });
};
//var outputfile = './outputdata.csv';
//fromfiletoarray(outputfile);

module.exports.fromfiletoarray = fromfiletoarray;
