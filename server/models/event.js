var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name: { type: String },
    venue: { type: String },
    date: { type: String },
    time: { type: String },
    isOver: { type: Boolean },
    content: { type: String },
    donors: [{
        type: Schema.Types.ObjectId,
        ref: 'donor'
    }],
    conductor: { 
        typeOf: { type: String, enum: ["Organization", "Blood Bank"] },
        details: { type: Schema.Types.ObjectId }
     }
});

var eventModel = mongoose.model('event', eventSchema);

module.exports = eventModel;