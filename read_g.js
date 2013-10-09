var fs = require('fs');
var outputfile;

function fromfiletoarray (outputfile) {

  fs.readFile(outputfile, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    companyLinks = data.toString().split(',');
    console.log(companyLinks);
    l = companyLinks.length;
    console.log(l);
    exports.getArray = companyLinks;

    for (var i = 0; i < l; i++) {
      url = 'http://www.ucimu.it/catalogo/imprese/v/' + companyLinks[i];
      console.log(url);
    }
  });
}
//var outputfile = './outputdata.csv';
//fromfiletoarray(outputfile);

module.exports.fromfiletoarray = fromfiletoarray;
