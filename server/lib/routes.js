var express = require('express');
var router = express.Router();
var index = require('../controllers/index');
var events = require('../controllers/events');
//var orgs = require('../controllers/orgs');
//var donors = require('../controllers/donors');

//router.get('/', index);

router.get('/createevent', events.createNewEvent);

router.get('/getallevents', events.getAllEvents);

router.post('/registertoevent', events.registerToEvent);


module.exports = router;