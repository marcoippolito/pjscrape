var cheerio = require('cheerio');

$ = cheerio.load('<ul id="fruits"> <li class="apple">Apple</li> <li class="orange">Orange</li> <li class="pear">Pear</li> </ul>');

var result = $('.orange').html();
console.log(result);
