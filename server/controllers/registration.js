// for registration of blood banks and organizations

var mongoose = require('mongoose');

var BankModel = require('../models/bank');
var OrgModel = require('../models/org');


var createOrganization = function( req , res){
    OrgModel.findOne({"userid" : req.body.userid } , function(err,doc){

        if(!doc){
            var newOrganization = new OrgModel(req.body);
            newOrganization.save(function(err , doc){
                if(err) throw err ;
                console.log(doc);
                res.json(doc);
            });
        }else{
            console.log("Username already");
            res.json({msg : "User ID already taken"});
        }

    });
}

var createBank = function(req , res){ console.log(req.body)
    BankModel.findOne({"userid" : req.body.userid } , function(err , doc){

        //if(err) throw err ;

        if(doc){ 
            console.log("Username already taken"); 
            res.json({ "msg" : "User ID already taken"});
        }else{
            var newBank = new BankModel(req.body);
            newBank.save(function(err,doc){
                if(err) throw err ;
                res.json(doc);
            });
        }
    });
}

module.exports = {
    createOrganization : createOrganization ,
    createBank : createBank
}