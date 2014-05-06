//Main dependencies
var express      = require('express');
var nconf        = require('nconf');
var dust         = require('adaro');

// Middlewares
var bodyParser   = require('body-parser');
var session      = require('express-session');
var cookieParser = require('cookie-parser');
var morgan       = require('morgan');
var compression  = require('compression');
var favicon      = require('serve-favicon');

//Config
var paths        = nconf.get('paths');
var port         = nconf.get('port');
var secret       = nconf.get('secret');
var ws           = nconf.get('ws');
var env          = nconf.get('env');
var morganOutput = nconf.get('morgan');

//Loader
var loader       = require(paths.libraries + '/loader');

module.exports = function () {

    var app = express();

    //View engine
    app.engine('dust', dust.dust({
        'layout': 'layouts/main',
        'cache': false
    }));
    app.set('view engine', 'dust');
    app.set('views', paths.views);

    //Favicon
    app.use(favicon(paths.public + '/images/favicon.ico'));

    //Parse request bodies
    app.use(bodyParser());

    //HTTP logger
    app.use(morgan(morganOutput));

    //Gzip
    app.use(compression());

    //Session support
    app.use(cookieParser(secret));
    app.use(session());

    //Public
    app.use(express.static(paths.public));

    //Routes
    require(paths.routes + '/routes')(app);

    //404 error
    app.use(function(req, res, next){

        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            res.render('errors/404', { url: req.url });
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({ error: 'Not found' });
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
    
    });

    //500 error
    app.use(function(err, req, res, next){

        res.status(err.status || 500);
        
        res.render('errors/500', { error: err });

    });

    //White space supression
    if(ws === false){
        dust.optimizers.format = function(ctx, node) { return node };
    }

    //Start
    app.listen(port);
    console.log('\n==============================');
    console.log('Rodati');
    console.log('Started on port: ' + port);
    console.log('Enviroment: ' + app.get('env'));
    console.log('==============================\n');

}