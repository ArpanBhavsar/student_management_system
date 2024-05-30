//This is database.js file which is used to create the connection between Node.js application and MongoDB Database. 
//For improved code maintanability, clarity and reusability we are following the MVC Architecture pattern and seperated the Database connection in different database.js file.
//For sensitive and confidential information like MongoDB Connection URI and Port number we are using .env file inside config folder which will not be uplpaded to GitHub.



//Import the Mongoose library to connect with the MongoDB Database
const mongoose = require('mongoose');

//Import the dotenv library to read the .env file
require('dotenv').config({path: "./config/.env"});

//Read the MongoDB Connection URI from the .env file
const MONGO_URI = process.env.MONGO_URI;

//Create the async function to connect with MongoDB Database in bakcground when the Node.js server is started
const connectDB = async () => {
        //Try catch block to connect to MongoDB Database using connect function
        try{
                //Await keyword is used for waiting for the task to complete.
                await mongoose.connect(MONGO_URI);
                //If there is any error during the connection it will directly send to catch block and printed on console using catch block
                //Print the success message on console when the database is connected with Node.js 
                console.log("MongoDB Database connected successfully.");
        }
        //Catch block to print the error if there is any error during connection to MongoDB 
        catch(err){
                //Print the erro on console if there is any error during the MongoDB database connection
                console.error(err.message);
                //Stop the process if there is any error. 
                process.exit(1);
        }
};

//connectDB funtion can only be called inside this file. We want the funtion call in app.js file as well
//To make the function avaialabe globally in application we can export it.


//Export the functio for global usage.
module.exports = connectDB;