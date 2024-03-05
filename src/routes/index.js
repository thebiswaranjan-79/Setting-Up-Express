const express = require('express');
const homePingController = require('./controllers/home.controller');

const router = express.router();

app.get('/home', homePingController);// Routes 
app.get('/homecoming', homePingController);// Routes 

module.exports = router;
