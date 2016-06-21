//生产环境设置
process.env.NODE_ENV = process.env.NODE_ENV || 'developement';

var config = require('../config/config');
var app = require('../config/express')();


//文件路由
var port=3001;



app.listen(port,function(err){
  console.log('app server runing on port:'+port);
});


module.exports = app;
