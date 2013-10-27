#!/usr/bin/env node
var unique;
Array.prototype.unique = function () {
  var r = [];
  o:for(var i = 0, n = this.length; i < n; i++) {
    for(var x = 0, y = r.length; x < y; x++) {
      if(r[x]===this[i]) {
	continue o;
      }
    }
    r[r.length] = this[i];
  }
  return r;
};

module.exports.unique = unique;

//var ar = [1, 2, 3, 2, 5, 5];
//var ar_new = ar.unique();
//console.log(ar);
//console.log(ar_new);
