#!/usr/bin/env node
var regiaucimu = require('./regiaucimu.js');
var swrapper = regiaucimu.swrapper;
var regiaucimumb = require('./regiaucimumb.js');
var swrappermb = regiaucimumb.swrappermb;


(function () {
  swrapper (swrappermb);
})();
