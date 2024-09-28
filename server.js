const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const logger = require('./middleware/logger')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error');


//router file
const bootcamps=require('./routes/bootcamps')

//load env var
dotenv.config({path:'./config/config.env'});

const app = express();

app.use(express.json());

//connect database
connectDB(); 

//middleware logger
app.use(logger);

//mount routers
app.use('/api/v1/bootcamps',bootcamps)

//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port:${PORT}`));

//handle unhandle promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error:${err.message}`);
    server.close(()=>process.exit(1));
})