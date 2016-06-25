//生产环境设置
var config  = require('./config'),
    mongoose = require('mongoose');
var db= function(){
    var db = mongoose.connect(config.db);
   var models = require('./auto-model')();
    console.log(models);
    return db;
};
module.exports = db;
