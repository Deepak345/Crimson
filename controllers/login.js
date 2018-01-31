var mongoose = require('mongoose');

var BankModel = require('../models/bank');
var OrgModel = require('../models/org');

var bcrypt = require("bcrypt");

var organizationLogin = function (req, res) {
    OrgModel.findOne({ "userid": req.body.userid , "isVerified" : true }, function (err, doc) {
        console.log(doc);

        if (err) throw err;
        if (doc) {

            bcrypt.compare(req.body.password, doc.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    var accountDetails = {
                        "_id": doc._id,
                        "name": doc.name,
                        "userid": doc.userid,
                        "address": doc.address,
                        "contact": doc.contact,
                        "email": doc.email,
                        "events": doc.events
                    };
                    req.session.user = accountDetails ;
                    req.session.user.userType = "Organization"
                    res.json(accountDetails);
                } else {
                    res.json({ msg: "Invalid Password, Enter again" });
                }
            });

        } else {
            res.json({ "msg": "User ID not found" });
        }

    })
}

var bankLogin = function (req, res) {
    BankModel.findOne({ "userid": req.body.userid , "isVerified" : true }, function (err, doc) {
        if (err) throw err;
        if (doc) {
            bcrypt.compare(req.body.password, doc.password, function (err, isMatch) {

                if (err) throw err;
                if (isMatch) {
                    var accountDetails = {
                        "_id": doc._id,
                        "name": doc.name,
                        "userid": doc.userid,
                        "address": doc.address,
                        "contact": doc.contact,
                        "email": doc.email,
                    };
                    req.session.user = accountDetails ;
                    req.session.user.userType = "Blood Bank"
                    res.json(accountDetails);
                } else {
                    res.json({ msg: "Invalid Password, Enter again" });
                }
            });

        } else {
            res.json({ "msg": "User ID not found" });
        }
    })
}

module.exports = {
    "organizationLogin": organizationLogin,
    "bankLogin": bankLogin
}