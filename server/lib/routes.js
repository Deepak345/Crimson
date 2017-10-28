var express = require('express');
var router = express.Router();
var index = require('../controllers/index');
var getAllEvents = require('../controllers/events');

//router.get('/', index);

router.get('/getallevents', getAllEvents);

module.exports = router;