var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var orgSchema = new Schema({
    name: { type: String },
    userid: { type: String },
    password: { type: String },
    address: { type: String },
    contact: { type: String },
    email: { type: String },
    events: [{ type: Schema.Types.ObjectId, ref: 'event' }]
});

var orgModel = mongoose.model('org', orgSchema);

module.exports = orgModel;

module.exports.saveOrg = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB.
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};