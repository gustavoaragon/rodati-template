'use strict';

//Export
module.exports = function (app) {

    //Index
    app.get('/', app.controllers.hello.index);

    //Hello
    app.get('/hello', app.controllers.hello.world);

    //Team
    app.get('/team', app.middlewares.headers.version, app.controllers.hello.team);

};