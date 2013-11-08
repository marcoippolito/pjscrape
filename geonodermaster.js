#!/usr/bin/env node

var geonoder = require('geonoder');
var address = 'VIA E. FERMI 13 28060 SAN PIETRO MOSEZZO (NO)';
var lat; var long;
//var address;
// geocoordinates through Nominatim (OpenStreetMap) //
function geoNoder (address) {
  geonoder.toCoordinates(address, geonoder.providers.nominatim, function(lat, long) {
    if (lat !== null && long !== null) {
      console.log('Lat nominatim: ' + lat + ' Long nominatim: ' + long); // Lat: 41.8965209 Long: 12.4805225
    }
    else {
    // geocoordinates through Google //
      geonoder.toCoordinates(address, geonoder.providers.google, function(lat, long) {
	console.log('Lat google: ' + lat + ' Long google: ' + long);
      });
    }

  });
}

geoNoder(address);

module.exports.geoNoder = geoNoder;
module.exports.lat = lat;
module.exports.long = long;
