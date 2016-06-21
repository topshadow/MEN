var config = require('../config/config'),
    exprsss= require('express'),
    morgan = require('morgan'),
    compresstion = require('compression'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    methodOverride = require('method-override');

module.exports = function() {
    var app = exprsss();
    if (process.env.NODE_ENV === 'developement') {
        app.use(morgan);
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compresstion());
    }

    // app.use(bodyParser.urlencoded({extended:true}));
    // app.use(bodyParser.json);
    // app.use(methodOverride());

    app.use(session({
        saveUnitialized:true,
        resave:true,
        secret:config.sessionSecret
    }));

    app.use(exprsss.static('./public'));

    /**路由层**/
    require('../app/routes/index.server.route')(app) ;

    return app;
}