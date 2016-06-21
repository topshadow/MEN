exports.index = function(req,res){
    if(req.session.lastVisited){
        console.log(req.lastVisited);
    }
    req.session.lastVisited = new Date();
    res.send('上次登录的时间'+req.session.lastVisited);

}