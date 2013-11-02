#!/usr/bin/env node

var geonoder = require('geonoder');
var address1 = 'PIAZZA DEL DUOMO 5 20121 MILANO MI';
var address = 'VIA MAGGIO, LOCALITA I CASONI 81-83 29027 PODENZANO (PC)';
var lat; var long;

// geocoordinates through Nominatim (OpenStreetMap) //
function geoNoder (address) {
  geonoder.toCoordinates(address, geonoder.providers.nominatim, function(lat, long) {
    console.log('Lat nominatim: ' + lat + ' Long nominatim: ' + long); // Lat: 41.8965209 Long: 12.4805225
    if (lat === null || long === null) {
    // geocoordinates through Google //
      geonoder.toCoordinates(address, geonoder.providers.google, function(lat, long) {
	console.log('Lat google: ' + lat + ' Long google: ' + long);
      });
    }
    else {
      return;
    }
  });
}

geoNoder(address);

module.exports.geoNoder = geoNoder;
module.exports.lat = lat;
module.exports.long = long;
