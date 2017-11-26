// for showing and posting notices

var mongoose = require('mongoose');

var NoticeModel = require('../models/notice');

var postNotice = function(req, res){
    console.log(req.body);
    var newNotice = new NoticeModel(req.body);
    newNotice.save(function(err, doc) {
        if(err) throw err;
        res.json(doc);
    });
};

var viewNotice = function(req, res){
    NoticeModel.find({}, {
        request: 1
    }, function(err, docs) {
        if(err) throw err;
        res.json(docs);
    });
};

module.exports = { 
                    "postNotice" : postNotice,
                    "viewNotice": viewNotice    
                }