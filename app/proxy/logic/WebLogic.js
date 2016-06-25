var BaseLogic = require('../base/BaseLogic');

WebLogic.prototype = new BaseLogic;

function WebLogic(service){
    this.platform = "web";
    this.service = service;
    this.doAction = function(req,res){
        res.send('error this logic not implements weblogic');
    }
}

 module.exports = WebLogic;