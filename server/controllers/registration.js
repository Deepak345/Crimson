// for registration of blood banks and organizations

var mongoose = require('mongoose');

var BankModel = require('../models/bank');
var OrgModel = require('../models/org');


var createOrganization = function( req , res){
    OrgModel.find({"userid" : req.body.userid } , function(err,doc){

        if(doc.length === 0){
            var newOrganization = new OrgModel(req.body);
            newOrganization.save(function(err , doc){
                if(err) throw err ;
                console.log(doc);
                res.json(req.body);
            });
        }else{
            console.log("Username already");
            res.json({msg : "User ID already taken"});
        }

    });
}

module.exports = {
    createOrganization : createOrganization 
}