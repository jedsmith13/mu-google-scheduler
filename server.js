'use strict';

const express = require('express');
let app = express();
app.listen(process.env.PORT || 3001, process.env.IP || '127.0.0.1');

// Load the calendar
const CalendarAPI = require('node-google-calendar');
const CONFIG = require('./settings');

let cal = new CalendarAPI(CONFIG);
const calendarId = 'Jed';

let basicReply = (req, res) => {
    // console.log(req);
    // console.log(CONFIG);
    // cal.insertEvent(calendarId, "Lunch Meeting with Edison", "2017-03-23T12:00:00+08:00", "2017-03-23T13:00:00+08:00").then(function(json){
    //     console.log('added event! :', json);
    // }, function(){
    //     console.log('error : ' + JSON.stringify(json));
    // });
    cal.listEvents(calendarId, "2017-01-28T08:00:00+08:00", "2017-04-28T12:00:00+08:00").then(function(json) {
        //Success
        console.log("list all events :", json);
        res.send(json);
    }, function(json) {
        //Error
        console.log("list events error : " + json);
    });
    res.send('Successfully connected');
};

app.use(basicReply);

return app;
