var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orgSchema = new Schema({
    name: { type: String },
    userid: { type: String },
    password: { type: String },
    address: { type: String },
    contact: { type: String },
    email: { type: String }
});

var orgModel = mongoose.model('org', orgSchema);

module.exports = orgModel;