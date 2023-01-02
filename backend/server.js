const { json } = require("body-parser");
const express=require("express")
var app=express();
var https =require("https")
var bodyparser=require("body-parser")
const Person = require('./models/mongoS');
const mongoose = require('mongoose');
const cors =require("cors");
app.use(cors()); //important for recieving api calls
app.use(express.static("public"));
app.use(express.json()); //important for recieving api calls

app.post("/create",function(req,res){
  
  var userDetails = new Person({
      name: req.body.name,
    });
    userDetails.save((err, doc) => {
      if (err){
          console.log(err)
      }
      else{
          console.log("workeddd yayyyy")
      }
      }
      )

      let posts = Person.find({}, function(err, posts){
          if(err){
              console.log(err);
          }
          else {
              console.log(posts);
          }
      });
      

});



app.listen(5000);
