 const express = require('express');
 const app =  express();
 const {PORT} = require('./config/server.config');

//  const email = 'abc@gmail.com';
//  const password = 12345;
// This can cause Security issues and Configurability issue 
// so to avoid this we can use .env 

 
 app.listen(PORT, () => {
    console.log(`Started Server at Port ${PORT}`); //, Email = ${EMAIL}
 });

 // Instead of nodemon we can use the below command 
 // node --watch src/index.js
