var express = require('express');
var router = express.Router();
var index = require('../controllers/index');
var events = require('../controllers/events');
var registration = require("../controllers/registration");
var login = require("../controllers/login");
var notice = require("../controllers/notice");

router.post('/createevent', events.createNewEvent);

router.get('/getallevents', events.getAllEvents);

router.post('/registertoevent', events.registerToEvent);

router.get("/getevent/:id" , events.getAnEvent);

router.post("/organizationsignup" , registration.createOrganization);

router.post("/registerbank" , registration.createBank);

router.post("/userlogin" , login.organizationLogin);

router.post('/postrequest', notice.postNotice);

router.get('/viewrequest', notice.viewNotice);


module.exports = router;