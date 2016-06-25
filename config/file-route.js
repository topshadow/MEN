// 当前项目的routes目录的路径
var path = require('path');
var fs = require('fs');

//扫描项目app/routes/下面的所有路由文件
var routesDir = path.dirname(__dirname)+'/app/routes';




/**文件路由层**/
module.exports = function (app) {

    function loadFile(filePath) {
        var routeObj = require(filePath);

        //如果包含autoroute属性，则进行解析
        if (routeObj.autoroute) {
            /*
             * autoroute就是上面hello.js的内容：
             'get' : {
             '/hello(/?)' : hello,
             '/hello/:id' : hello2
             },
             'post' : {

             }
             */
            for (var method in routeObj.autoroute) {
                var routeList = routeObj.autoroute[method];

                if (!routeList) {
                    break ;
                }
                //method就是上面取到的get、post
                for(var routeRule in routeList) {
                    //func获取得到的就是上面对应各项的处理函数
                    console.log(routeList);
                    var func = routeList[routeRule];
                    console.log(routeRule+":"+func);
                    app[method](routeRule, func);

                }
            }
        }
    }
    
fs.readdir(routesDir, function(err, files) {
    if (err) {
        console.log(err);
        return ;
    }

    files.forEach(function(path) {
        //routes目录下的文件路径
        var filePath = routesDir + "/" + path;

        fs.stat(filePath, function(err, stats) {
            if (err) {
                return ;
            }

            if (stats.isDirectory()) {
                //递归执行函数
            } else  {
                //加载文件并解析
                console.log('加载路由文件'+filePath);
                loadFile(filePath);
            }
        })
    });
})
return app;
}
