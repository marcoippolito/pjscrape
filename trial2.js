#!/usr/bin/env node
var cheerio = require('cheerio');
var fs = require('fs');

$ = cheerio.load('&nbsp; </div> <a href="catalogo/imprese/v/adige/"> <img class="alignright" title="ADIGE S.P.A. -  BLM GROUP" alt="ADIGE S.P.A. -  BLM GROUP logo" src="typo3temp/pics/d116b5b9a3.png" width="120" height="23" /> </a> <div class="detail" style="margin-left:30px;"> <div class="title"><a href="catalogo/imprese/v/adige/">ADIGE S.P.A. -  BLM GROUP</a></div> <div class="abstract">LEVICO TERME (TN)</div> </div> </div> </div> <div class="record"> <div class="inner"><div class="detail" style="margin-left:30px;"> <div class="title"><a href="catalogo/imprese/v/mandelli-sistemi/">MANDELLI  SISTEMI</a></div> <div class="abstract">PIACENZA (PC)</div> </div> </div> </div> <div class="record"> <div class="inner"> <div class="marchioucimu"> &nbsp; </div> <div class="detail" style="margin-left:30px;"> <div class="title"><a href="catalogo/imprese/v/mapal/">MAPAL ITALIA S.R.L. CON UNICO SOCIO</a></div> <div class="abstract">GESSATE (MI)</div> </div> </div> </div> <div class="record"> <div class="inner">');
var companies = [];
$('a[href^="catalogo/imprese"]').each(function(i, elem) {
  companies[i] = $(this).text();
});

console.log(companies);
// output: file text
//var fmt = function(companies_array) {
//  companies_array.join(",");
//};

//var outfile = 'ucimu2.txt';
//var out = fmt(companies);
//console.log(out);
//fs.writeFileSync(outfile,out);
