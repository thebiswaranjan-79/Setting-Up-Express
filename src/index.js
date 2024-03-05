 const express = require('express');
 const app =  express();
 const {PORT} = require('./config/server.config');
const homePingController = require('./controllers/home.controller');
const router = require('./routes');// the file is bydefault index.js
const customRouter = require('./routes/customrouter')
//  const email = 'abc@gmail.com';
//  const password = 12345;
// This can cause Security issues and Configurability issue 
// so to avoid this we can use .env 

 app.use( '/api',router);
 app.use('/custom' ,customRouter); // /custom/custom1


 app.listen(PORT, () => {
    console.log(`Started Server at Port ${PORT}`); //, Email = ${EMAIL}
 });

 // Instead of nodemon we can use the below command 
 // node --watch src/index.js


/*

   ## how will you manage these kind of routes using express router ?
 localhost:3000/api/vi/products/:id
 localhost:3000/api/v2/products/:id
 localhost:3000/api/v2/categories/:id
 localhost:3000/api/v2/users/:id
*/