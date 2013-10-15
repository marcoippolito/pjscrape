var fs = require('fs');
var outputfile;

function fromfiletoarray (outputfile) {
  // convert the content of a file to an array //
  fs.readFile(outputfile, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    companyLinks = data.toString().split(',');
    console.log(companyLinks);
    l = companyLinks.length;
    console.log(l);
    exports.getArray = companyLinks;
  });
}


module.exports.fromfiletoarray = fromfiletoarray;
