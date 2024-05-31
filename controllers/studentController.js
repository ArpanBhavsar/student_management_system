//This is controller file used to handle all the CRUD operations directly to the MongoDB Database

//Import the student model to use it for MongoDB CRUD operations
const Student = require("../models/student");

//Create and export getAllStudents function for routes for MongoDB read operation to get data of all students
exports.getAllStudents = async (req, res) => {
  //Try catch block to read all the students from mongoDB.
  //find() function is used to read all data from the mongoDB collection.

  try {
    //Get all data from students collection from mongoDB and store it in students variable
    const students = await Student.find();
    //Send the retrieved data as resopnse in JSON format.
    res.json(students);
  } catch (err) {
    //If there is any error in retrievig the data set the status to 500 means error finding the data and send the error message as response
    res.status(500).json({ message: err.message });
  }
};

//Create and export createStudent function for routes for MongoDB create operation. It will add new student details in database
exports.createStudent = async (req, res) => {
  //Parse the body to get the student details
  const {
    student_id,
    name,
    email,
    conatct_no,
    address,
    gender,
    date_of_birth,
    batch_year,
  } = req.body;

  //Create new student object with Student Model
  const newStudent = Student({
    student_id,
    name,
    email,
    conatct_no,
    address,
    gender,
    date_of_birth,
    batch_year,
  });


  //Try catch block to add one student to mongoDB.
  //save() function is used to add document to mongoDb while using model 
  try{
        //Wait for save funciton to add the record to mongoDB and get the response 
        const student = await newStudent.save();
        //If it adds the data successfully set status to 201 and send response of added data
        res.status(201).json(student);
  } catch (err){
        //If theres is any error while adding the data, this block will catch it and send back as response in json format with error message.
        res.status(400).json({message: err.message});
  }
};
