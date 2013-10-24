#!/usr/bin/env node

function matrix(rows, cols, defaultValue){
  var arr = [];
  // Creates all lines:
  for(var i=0; i < rows; i++){
      // Creates an empty line
      arr.push([]);
      // Adds cols to the empty line:
      arr[i].push( new Array(cols));
      for(var j=0; j < cols; j++){
	// Initializes:
	arr[i][j] = defaultValue;
      }
  }
return arr;
}

//var y = matrix(10, 3, '');
//console.log(y);

module.exports.matrix = matrix;
