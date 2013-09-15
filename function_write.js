var fs = require('fs');
var destination; var source; var write;
exports.write = function(destination, source) {
  fs.writeFile('destination',source, function (err) {
    if (err) throw err;
  });
}

var provaa; 
var companies = ["a", "b", "c", "d"];
write('provaa.csv', companies);


//module.exports = write;
