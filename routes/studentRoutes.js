//This is the routes file which connects the Node.js application with studentController.js to perform the CRUD operations on the mongoDB.
//This file seperates the code for handling the api requests of students routes

//Import the express libraray
const express = require('express');

//Create the router to handle the routing of all student api requests
const router = express.Router();

//Import the studentContorller for connecting the routes with controller funcitons
const studentContorller = require('../controllers/studentController')

//Create the route to get all students
router.get('/', studentContorller.getAllStudents);

//Create the route to add one student
router.post('/', studentContorller.createStudent);

//Export the router for app.js
module.exports = router;