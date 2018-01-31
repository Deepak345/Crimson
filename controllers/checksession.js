var checkSession = function (req,res){

    res.json(req.session.user);

}

var logout = function( req , res ){
    console.log("here")
    req.session.destroy();
    console.log(req.session);
    res.end();
}

module.exports = {"checkSession" : checkSession , "logout" : logout};