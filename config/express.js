var config = require('../config/config'),
    exprsss= require('express'),
    morgan = require('morgan'),
    compresstion = require('compression'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    fileroute = require('./file-route');
    ;

module.exports = function() {
    var app = exprsss();
    if (process.env.NODE_ENV === 'developement') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compresstion());
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        secret: '12345',
        name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
        cookie: {maxAge: 80000},  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
        resave: false,
        saveUninitialized: true,
    }));

    //文件路由
    fileroute(app);
    //
    // app.use(exprsss.static('./public'));

    return app;
}
