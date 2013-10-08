var cheerio = require('cheerio');
// We instatiate a DOM for our example HTML, by sending the HTML string to cheerio.load(). //
// The returned value is the constructed DOM, which we store in a variable called $ in order to match how the DOM is accessed in the browser when usin jQuery. //

$ = cheerio.load('<html><head></head><body><div id="content"><div id="sidebar"></div><div id="main"><div id="breadcrumbs"></div><table id="data"><tr><th>Name</th><th>Address</th></tr><tr><td class="name">John</td><td class="address">Address of John</td></tr><tr><td class="name">Susan</td><td class="address">Address of Susan</td></tr></table></div></div></body></html>');

// Once we have a DOM created we proceed as if we were using jQuery on the client side: we use the proper selector and the each iterator to find all the occurrences of the data we want to extract.

$('#data .name').each(function() {
//In the callback function we use the console.log function to write the extracted data. //
  console.log($(this).text());
});
//Output: John Susan //
