// for registration of blood banks and organizations

var mongoose = require('mongoose');
var mailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var bcrypt = require("bcrypt");

var BankModel = require('../models/bank');
var OrgModel = require('../models/org');

var options = {
    service: 'gmail',
    secure: true,
    auth: {
        user: 'ramakpatt@gmail.com',
        pass: 'edtgh67ifr'
    }
};


var createOrganization = function (req, res) {
    OrgModel.findOne({ "userid": req.body.userid }, function (err, doc) {

        if (!doc) {
            var newOrganization = new OrgModel(req.body);
            OrgModel.saveOrg(newOrganization, function (err, doc) {
                if (err) throw err;
                console.log(doc);
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(newOrganization.emailid, salt, function (err, hash) {
                        console.log("user added");
                        var link = req.protocol + '://' + req.get('host') + '/api/verify?email=' + newUser.emailid + '&code=' + hash;
                        var mail = {
                            from: "crimson" + ' <ramakpatt@gmail.com>',
                            to: newUser.emailid,
                            subject: "Verification mail",
                            html: "<p>" + "Click on the below link to verify " + link + "</p>"
                        };

                        transport.sendMail(mail, (error, response) => {
                            transport.close()
                            if (error) {
                                console.log(error);
                                res.json({ "msg": 'Error in sending mail!' });
                            } else {
                                console.log("Mail has been sent")
                                res.json({ "msg": 'A mail has been sent to you for verification' });
                            }
                        })

                    });
                });
            });
        } else {
            console.log("Username already");
            res.json({ msg: "User ID already taken" });
        }

    });
}

var createBank = function (req, res) {
    console.log(req.body)
    BankModel.findOne({ "userid": req.body.userid }, function (err, doc) {

        //if(err) throw err ;

        if (doc) {
            console.log("Username already taken");
            res.json({ "msg": "User ID already taken" });
        } else {
            var newBank = new BankModel(req.body);
            BankModel.saveBank(newBank, function (err, doc) {
                if (err) throw err;
                console.log(doc);
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(newBank.emailid, salt, function (err, hash) {
                        console.log("bank added");
                        res.json({ "message": "succesful" });
                    });
                });
            });
        }
    });
}

module.exports = {
    createOrganization: createOrganization,
    createBank: createBank
}