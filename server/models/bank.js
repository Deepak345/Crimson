var mongoose = require("mongoose");
var Schema = mongoose.Schema ;
var bcrypt = require("bcrypt");

var bankSchema = new Schema({
    name : { "type" : String , required : true },
    userid : { "type" : String , required : true } ,
    password : { "type" : String , required : true },
    contact : { "type" : String , required : true },
    email : { "type" : String , required : true },
    address : { "type" : String , required : true },
    category : { "type" : String , 
                  enum : [ "Public" , "Private"]},
    nodalOfficerName : { "type" : String , required : true },
    nodalOfficerNo : { "type" : String , required : true },
    nodalOfficerEmail : { "type" : String , required : true }
});


var bankModel = mongoose.model("bank" , bankSchema);

module.exports = bankModel ;

module.exports.saveBank = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB.
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};