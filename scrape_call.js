var s = require('./function_scrape.js');
var url = 'http://www.ucimu.it/catalogo/imprese/elenco/';
var param = 'a[href^="catalogo/imprese"]';
s.scrape(url, param);
