var webLogic = require('../proxy/logic/WebLogic');

var userLogic = new webLogic('user');


userLogic.doAction =function(action){
    switch(action){
        case "login":
            return login;
        case "forgotpassword":
            return forgotpassword;
    }
};


function login(req,res){

    res.send("login successfuly");

}

function forgotpassword(req,res){
    res.send("forgot password successfully");
}


module.exports = userLogic;








