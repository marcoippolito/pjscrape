#!/usr/bin/env node

var Boilerpipe = require('boilerpipe');
var boilerpipe = new Boilerpipe(); // create a new instance

var java = require('java');
java.classpath.push('commons-lang3-3.1.js');
java.classpath.push('commons-io.jar');

//var spawn = require('child_process').spawn;

//var child = spawn('./OPENNLP_HOME/bin/opennlp', ['param1', 'param2']);
//{
//  extractor: Boilerpipe.Extractor.Canola
//});

boilerpipe.setUrl('http://www.atimetals.com/Pages/default.aspx');
var a;
boilerpipe.getText(function(err, text) {
  a = text;
  console.log(a);

});
module.exports.a = a;
