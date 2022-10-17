const Person = require('./models/mongoS');
const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var userDetails = new Person({
    name: "Shahid",
  });
   
  userDetails .save((err, doc) => {
        if (err){
            console.log(err)
        }
        else{
            console.log("workeddd yayyyy")
        }
        }
        )
