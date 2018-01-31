const mongoose = require('mongoose');
var BankModel = require('../models/bank');
var OrgModel = require('../models/org');
const bcrypt = require('bcrypt');


var verifyMail = function (req, res) {
    console.log(req.query);
    // res.json(req.query);
    bcrypt.compare(req.query.mail, req.query.code, function (err, isMatch) {
        if (err) throw err;
        if (req.query.type === "org") {
            console.log("in org verification");
            console.log()
            if (isMatch) {
                console.log("matched")
                OrgModel.findOneAndUpdate({ email: req.query.mail }, { $set: { isVerified: true } }, function (err, doc) {
                    console.log(doc)
                    if (err) throw err;
                    if (!doc) res.send("invalid mail");
                    else res.send("successfully verified");
                });
            }else res.send("You couldn't be verified")
        } else if (req.query.type === "bank") {
            console.log("in bank verification");
            if (isMatch){
                BankModel.findOneAndUpdate({ email: req.query.mail }, { $set: { isVerified: true } }, function (err, doc) {
                    console.log(doc)
                    if (err) throw err;
                    if (!doc) res.send("invalid mail");
                    else res.send("successfully verified");
                });
            }else res.send("you could not be verified")

        }
        else res.send("couldnt match");
    });
};

module.exports = { "verifyMail": verifyMail };
