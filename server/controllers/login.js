var mongoose = require('mongoose');

var BankModel = require('../models/bank');
var OrgModel = require('../models/org');

var organizationLogin = function (req, res) {
    OrgModel.findOne({ "userid": req.body.userid }, function (err, doc) { console.log(doc);
       
            if (err) throw err;
            if(doc){
            if (doc.password == req.body.password) {
                var accountDetails = {
                    "_id" : doc._id,
                    "name" : doc.name,
                    "userid" : doc.userid,
                    "address" : doc.address,
                    "contact" : doc.contact,
                    "email" : doc.email,
                    "events" : doc.events
                };
                res.json(accountDetails);
            } else {
                res.json({ "msg": "Invalid password" });
            }
        }else{
            res.json({"msg" : "User ID not found"});
        }
        
    })
}

var bankLogin = function(req,res){
    BankModel.findOne({ "userid" : req.body.userid } , function(err , doc){
        if(err) throw err ;

        if(doc){
            if(doc.password == req.body.password){
                var accountDetails = {
                    "_id" : doc._id,
                    "name" : doc.name,
                    "userid" : doc.userid,
                    "address" : doc.address,
                    "contact" : doc.contact,
                    "email" : doc.email,
                };
                res.json(accountDetails);      
            }else{
                res.json({ "msg": "Invalid password" });
            }
        }else{
            res.json({"msg" : "User ID not found"});
        }
    })
}

module.exports = {
    "organizationLogin": organizationLogin ,
    "bankLogin" : bankLogin
}