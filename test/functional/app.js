casper.test.begin('App tests', 9, function suite(test) {

    //Index
    casper.start('http://localhost:3000/', function(response) {
        casper.test.assertHttpStatus(200, 'Status 200');
        casper.test.assertMatch(response.contentType, /html/, 'Content type HTML');
        casper.test.assertTextExists('index', 'The page has the text "index"');
    });

    //Hello
    casper.thenOpen('http://localhost:3000/hello', function(response) {
        casper.test.assertHttpStatus(200, 'Status 200');
        casper.test.assertMatch(response.contentType, /html/, 'Content type HTML');
    });

    //Team
    casper.thenOpen('http://localhost:3000/team', function(response) {
        casper.test.assertHttpStatus(200, 'Status 200');
        casper.test.assertMatch(response.contentType, /json/, 'Content type JSON');
    });

    //404
    casper.thenOpen('http://localhost:3000/404', function(response) {
        casper.test.assertHttpStatus(404, 'Status 404');
        casper.test.assertMatch(response.contentType, /html/, 'Content type HTML');
    });

    casper.run(function() {
        test.done();
    });

});