var EventModel = require('../models/event');

var getAllEvents = function(req, res) {
    EventModel.find({}, function(err, docs) {
        if(err) throw err;
        console.log(docs);
        res.json(docs);
    });
};

module.exports = getAllEvents;