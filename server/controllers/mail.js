var mongoose = require('mongoose');

var sendMail = function(req,res){
    console.log(req.body);
}

module.exports = {
    "sendMail" : sendMail 
}