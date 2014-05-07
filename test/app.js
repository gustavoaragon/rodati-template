//Main dependencies
var request = require('supertest');

//App
var app     = require('../server.js');

//Test index
describe('GET /', function(){
    it('respond with text', function(done){
        request(app)
        .get('/')
        .set('Accept', 'application/html')
        .expect('Content-Type', /html/)
        .expect('Content-Length', '5')
        .expect(200, done);
    })
});

//Test team
describe('GET /hello', function(){
    it('respond with html', function(done){
        request(app)
        .get('/hello')
        .set('Accept', 'application/html')
        .expect('Content-Type', /html/)
        .expect(200, done);
    })
});

//Test team
describe('GET /team', function(){
    it('respond with json', function(done){
        request(app)
        .get('/team')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
});

//Test 404
describe('GET /404', function(){
    it('respond with 404', function(done){
        request(app)
        .get('/404')
        .expect(404, done);
    })
});