//  Easy Web Scraping With Node.js - miguelgrinberg //
//  http://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs /

var request = require('request');
var cheerio = require('cheerio');

pools = {
    'Aloha': 3,
    'Beaverton': 15,
    'Conestoga': 12,
    'Harman': 11,
    'Raleigh': 6,
    'Somerset': 22,
    'Sunset': 5,
    'Tualatin Hills': 2
};
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Bind the name if the pool to the callback function at the time the callback is created and sent to the request() function, because that is whtn the pool variable has the correct value. //
// the scope of JS functions is defined at the time the function is created.//

for (pool in pools) {
    var url = 'http://www.thprd.org/schedules/schedule.cfm?cs_id=' + pools[pool];
    request(url, ( function(pool) {
// self-executing function. While a callback function is a function created now but runs later, a self-executing function is created and immediately executed. // // Whatever this function will returns will be the result of the while expression // 

        return function(err, resp, body) {
            if (err)
                throw err;
            $ = cheerio.load(body);
            // TODO: scraping goes here!
            // First, locate the <td> element that defines a day //
            $('#calendar .days td').each(function(day) {
              // then search for <div> elements within it //
              $(this).find('div').each(function() {
                // to remove the lines of whitespace in between the event time and the description, we can use 'replace' //
                event = $(this).text().trim().replace(/\s\s+/g, ',').split(',');
                // We are only interested in obtaining the open swim events //
                if (event.length >= 2 && (event[1].match(/open swim/i) || event[1].match(/family swim/i)))

                  console.log(pool + ',' + days[day] + ',' + $(this).text());
            });
          });   
        }
    } )(pool));
}

