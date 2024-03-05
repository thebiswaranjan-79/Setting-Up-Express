 const express = require('express');
 const dotenv = require('dotenv');

 dotenv.config();
 const app =  express();
 
 const PORT = process.env.PORT;

//  const email = 'abc@gmail.com';
//  const password = 12345;
// This can cause Security issues and Configurability issue 
// so to avoid this we can use .env 

 
 app.listen(PORT, () => {
    console.log(`Started Server at Port ${PORT}`)
 });

 // Instead of nodemon we can use the below command 
 // node --watch src/index.js
