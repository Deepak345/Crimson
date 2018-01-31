// for showing and posting notices

var mongoose = require('mongoose');

var NoticeModel = require('../models/notice');

// mailer code

var mailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var options = {
    service: 'gmail',
    secure: true,
    auth: {
        user: 'ramakpatt@gmail.com',
        pass: 'edtgh67ifr'
    }
};

var transport = mailer.createTransport(smtpTransport(options));

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

var register = function(req, res) {
    console.log(req.body);
    NoticeModel.findOne({ _id: req.body.noticeId }, function(err, doc) {
        if(doc) {
            console.log("Doc Email : ", doc);
            var mail = {  // to be set with appropriate req.body attributes
                from:  "Crimson" + ' <ramakpatt@gmail.com>'  , // "<" + req.body.organizer + ">" ,   //'ramakpatt@gmail.com',
                to: doc.email,  // should be set to req.body.to
                subject: req.body.donor.name + " wants to donate!" ,
                html: "<b>Donor Details</b> : <br><ul><li><b>Name</b>: " + req.body.donor.name + "</li>" + "<li><b>Contact No.</b>: " + req.body.donor.contact + "</li>" + "<li><b>Email</b>: " + req.body.donor.email + "</li>" + "<li><b>Age</b>: " + req.body.donor.age + "</li>" + "<li><b>Blood Group</b>: " + req.body.donor.bloodGrp + "</li>" + "</li></ul><br><br><p><i>Contact the donor for further advancements.</i></p>"
            }
        
           transport.sendMail(mail, (error, response) => {
                transport.close()
                if (error) {
                    console.log("Mail Error", error );
                    res.json({ response: error });
                } else {
                    console.log("Mail Sent");
                    res.json({ response: 'Mail has been sent. You will be contacted by the notice owner.' });
                }
            })
        } else {
            res.json({response: "Couldn't find notice!"});
        }
    });
};

module.exports = { 
                    "postNotice" : postNotice,
                    "viewNotice": viewNotice,
                    "register": register    
                };