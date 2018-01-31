'use strict';

angular.module('clientApp')
.controller('ProximaldetCtrl', function (selectedbankservice) {
    var details = selectedbankservice.getInfo();
    this.name = details[1]
    this.address = details[5];
    this.city = details[4]
    this.district = details[3]
    this.state = details[2]
    this.pincode = details[6]
    this.contactno = details[7]
    this.mobile = details[8]
    this.email = details[11]
    this.website = details[12]
    this.officer = details[13]
    this.officerNo = details[15]
    this.officerEmail = details[16]
    this.category = details[18]
    this.component = details[19]
    this.timing = details[21]
    this.location = {"latitude" : details[25] , "longitude" : details[26]};
    this.distance = details[27];
    
});