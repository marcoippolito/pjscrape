var fs = require('fs');
var destination; var source;
exports.write = function(destination, source) {
  fs.writeFile('destination',source, function (err) {
    if (err) throw err;
  });
};
//companies = ["a", "b", "c", "d"];
//write('provaa.csv', companies);
