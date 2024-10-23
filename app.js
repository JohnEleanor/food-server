const express = require('express');
const app = express();
const PORT = 3000;
const middleWare = require('./Middleware/middleWare.js');
const userRouter = require('./routes/userRouter.js');

app.use(express.json());
app.use(middleWare.keepLog);

app.use('/users', userRouter);


app.listen(PORT, () => {
    console.log('\x1b[31m',"[jay] Running on http://localhost:3000");
})