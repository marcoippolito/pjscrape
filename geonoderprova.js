#!/usr/bin/env node

var geonoder = require('geonoder');
var address1 = 'PIAZZA DEL DUOMO 5 20121 MILANO MI';
var address = 'VIA RUFFILLI 8/10 20060 PESSANO CON BORNAGO (MILANO)';
var lat; var long;

geonoder.toCoordinates(address, geonoder.providers.nominatim, function(lat, long) {
  console.log('Lat nominatim: ' + lat + ' Long nominatim: ' + long); // Lat: 41.8965209 Long: 12.4805225
  if (lat === null || long === null) {
    geonoder.toCoordinates(address, geonoder.providers.google, function(lat, long) {
      console.log('Lat google: ' + lat + ' Long google: ' + long);
    });
  }
  else {
	return;
  }
});
