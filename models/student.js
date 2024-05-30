//This file is used to create the model of Students collection which will help validate and maintain data  consistancy for Students collection in  MongoDB.

//Import the mongoose library to use the Schema funciton
const mongoose = require("mongoose");

//Create the schema for the students collection
const StudentSchema = new mongoose.Schema(
  {
    student_id: Number,
    name: String,
    email: String,
    conatct_no: String,
    address: String,
    gender: String,
    date_of_birth: Date,
    batch_year: String,
  },
  {
    collection: "students",
  }
);

//Export the model to use in other files globally
module.exports = mongoose.model("Student", StudentSchema);
