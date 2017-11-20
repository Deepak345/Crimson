var express = require('express');
var router = express.Router();
var index = require('../controllers/index');
var events = require('../controllers/events');
var registration = require("../controllers/registration")
//var mailer = require("../controllers/mailer.js");
//var orgs = require('../controllers/orgs');
//var donors = require('../controllers/donors');

//router.get('/', index);

router.post('/createevent', events.createNewEvent);

router.get('/getallevents', events.getAllEvents);

router.post('/registertoevent', events.registerToEvent);

router.get("/getevent/:id" , events.getAnEvent);

router.post("/organizationsignup" , registration.createOrganization);


module.exports = router;