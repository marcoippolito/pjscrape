#!/usr/bin/env node

var expvalue = require('./expvalue.js');

expvalue.addX(5);

console.log('the result is: ', expvalue.result);

console.log('valore di x: ', expvalue.x);
