module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/',function(req,res){
        console.log('/');
        res.send('/');
    });
}