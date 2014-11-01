/*global casper */

'use strict';

casper.test.begin('404 page', 2, function suite(test) {

    var url = 'http://localhost:3000/';
    
    //404
    casper.thenOpen(url + '404', function(response) {
        casper.test.assertHttpStatus(404, 'Status 404');
        casper.test.assertMatch(response.contentType, /html/, 'Content type HTML');
    });

    casper.run(function() {
        test.done();
    });

});
