'use strict';

exports.init = function (app) {

    //404 error
    app.use(function(req, res){

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
    app.use(function(err, req, res){

        res.status(err.status || 500);
        
        res.render('errors/500', { error: err });

    });

}; 