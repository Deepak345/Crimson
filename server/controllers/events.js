var mongoose = require('mongoose');
var EventModel = require('../models/event');
var DonorModel = require('../models/donor');
var BankModel = require('../models/bank');
var OrgModel = require('../models/org');

var createNewEvent = function(req, res) {
    var newEvent = new EventModel({
        name: req.body.event.name,
        venue: req.body.event.venue,
        date: req.body.event.date,
        time: req.body.event.time,
        isOver: false,
        content: req.body.event.content,
        donors: [],
        conductor: { 
            typeOf: req.body.event.conductor.typeOf,
            details: mongoose.Schema.Types.ObjectId(req.body.event.conductor.details)
         }
    });
    newEvent.save(function(err, doc) {
        if(err) throw err;
        console.log(doc);
        if(doc.conductor.typeOf === "Organization") {
            OrgModel.update({ _id: doc.conductor.details }, { $push: { events:  doc._id} }, function(err, doc) {
                if(err) throw err;
                console.log("Organisation Events Array updated!");
            })
        } else {
            BankModel.update({ _id: doc.conductor.details }, { $push: { events:  doc._id} }, function(err, doc) {
                if(err) throw err;
                console.log("Banks Events Array updated!");
            })
        }
        res.json(doc);
    });
};

var getAllEvents = function(req, res) {
    EventModel.find({}, function(err, docs) {
        if(err) throw err;
        console.log(docs);
        res.json(docs);
    });
};

var registerToEvent = function(req, res) {
    console.log(req.body);
    DonorModel.find({ $text: { $search: req.body.donor.email } }, function(err, doc) {
        if(err) throw err;
        console.log("Doc : ", doc);
        if(doc.length === 0) {
            console.log("Donor doesnt exist, Creating new donor.");
            var newDonor = new DonorModel(req.body.donor);
            newDonor.save(function(err, doc) {
                if(err) throw err;
                console.log(doc._id);
                console.log();
                EventModel.update({ _id: mongoose.Schema.Types.ObjectId(req.body.eventId) },
                { $push: { donors: mongoose.Schema.Types.ObjectId(doc._id) } },
                function(err, doc) {
                   if(err) throw err;
                   console.log("Updated: ", doc);
                   res.json(doc);
               });
            });
        } else {
            console.log("Donor Already Exists");
            res.json(doc);
        }
    });
};

module.exports = {
    createNewEvent: createNewEvent,
    getAllEvents: getAllEvents,
    registerToEvent: registerToEvent
};