const express = require('express');
const homePingController = require('./controllers/home.controller');

const router = express.router();

app.get('/custom', homePingController);// Routes 
app.get('/custom1', homePingController);// Routes 

module.exports = router;
