var mongoose = require('mongoose');
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

// Mail sender code 
var sendMail = function (req, res) {
    console.log(req.body);

    var mail = {  // to be set with appropriate req.body attributes
        from:  req.body.organizer + ' <ramakpatt@gmail.com>'  , // "<" + req.body.organizer + ">" ,   //'ramakpatt@gmail.com',
        to: 'rkpattnaik780@gmail.com',  // should be set to req.body.to
        subject: req.body.subject ,
        html: "<p>" + req.body.text + "</p><br><br><p><i>All correspondences should be replied to - </i><b>" + req.body.from + "</b></p>"
    }

   transport.sendMail(mail, (error, response) => {
        transport.close()
        if (error) {
            res.json({ error });
        } else {
            res.json({ response: 'Sent' });
        }
    })  


}

module.exports = {
    "sendMail": sendMail
}