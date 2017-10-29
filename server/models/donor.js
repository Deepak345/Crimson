var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donorSchema = new Schema({
    name: { type: String },
    age: { type: Number, min: [ 18, "Under 18! Can't Donate." ] },
    gender: { type: String, enum: [ "Male", "Female", "Other" ] },
    email: { type: String },
    contact: { type: String },
    bloodGrp: { type: String, enum: [ "O+ve", "O-ve", "B+ve", "B-ve", "AB+ve", "AB-ve", "A+ve", "A-ve" ] }
});


var donorModel = mongoose.model('donor', donorSchema);

module.exports = donorModel;