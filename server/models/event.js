var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name: { type: String },
    venue: { type: String },
    date: { type: String },
    time: { type: String },
    isOver: { type: String },
    content: { type: String },
    conductor: { 
        typeOf: { type: String, enum: ["org", "bank"] },
        details: { type: mongoose.Schema.Types.ObjectId }
     },
    donors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'donor'
    }]
});

var eventModel = mongoose.model('event', eventSchema);

module.exports = eventModel;