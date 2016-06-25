var handler = {
    set: function(target, key,value){
        if(key in target) {
           console.error(`${key} is existing , please remove it `);
        }else{
            target[key] = value;
        }
    }};
var db = new Proxy({}, handler);
db.a =1;
db.a = 1;