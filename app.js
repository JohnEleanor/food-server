const express = require('express');
const rateLimit = require('express-rate-limit');

// Rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 10, 
    message: 'Too many requests from this IP, please try again | <h1>why u so bad 😑.</h1>' ,
    headers: true, // Show rate limit headers
});
  
// setting up express
const app = express();
const PORT = 3000;

// Import 
const middleWare = require('./Middleware/middleWare.js');
const userRouter = require('./routes/userRouter.js');

// App use 
app.use(express.json());
app.use(middleWare.keepLog);
app.use(limiter);


// Routes
app.use('/users', userRouter);


// Listen
app.listen(PORT, () => {
    console.log('\x1b[31m',"[jay] Running on http://localhost:3000");
})