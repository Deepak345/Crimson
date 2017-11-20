var mongoose = require("mongoose");
var Schema = mongoose.Schema ;

var bankSchema = new Schema({
    name : { "type" : String , required : true },
    contact : { "type" : String , required : true },
    email : { "type" : String , required : true },
    city : { "type" : String , required : true },
    district : { "type" : String , required : true },
    state : { "type" : String , required : true },
    category : { "type" : String , 
                  enum : [ "Public" , "Private"]},
    pincode : { "type" : String , required : true , 
                "min" : [ 6 , "invalid pin code" ] ,
                "max" : [ 6 , "invalid pin code"]},
    nodalOfficerName : { "type" : String , required : true },
    nodalOfficerNo : { "type" : String , required : true },
    nodalOfficerEmail : { "type" : String , required : true }
});


var bankModel = mongoose.model("bank" , bankSchema);

module.exports = bankModel ;