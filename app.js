//This is the enrty point of the Node.js application.
//This file will start the Node.js server and establish all the connections and routes.

//Import the express library to create Express server for routes
var express = require('express');
//Import the body-parser library to handle the request body and params
var bodyParser = require('body-parser');
//Import the dotenv library to read the .env file
require('dotenv').config({path: "./config/.env"});

//Import the connectDB function of database.js file to connect to the MongoDB Database
const connectDB = require('./config/database');

//Create the instance of express server
const app = express();

// Connect to the Database by calling the connectDB function
connectDB();

//Read the port number form the .env file
const port = process.env.PORT || 3000;

//Create the Express Server 
app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
});