/*global casper */

'use strict';

casper.test.begin('Hello page', 2, function suite(test) {

    var url = 'http://localhost:3000/';

    //Index
    casper.start(url, function(response) {
        casper.test.assertHttpStatus(200, 'Status 200');
        casper.test.assertMatch(response.contentType, /html/, 'Content type HTML');
    });

    casper.run(function() {
        test.done();
    });

});
