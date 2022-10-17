const { json } = require("body-parser");
var app=express();
var https =require("https")
var bodyparser=require("body-parser")

import ReactDOM from "react-dom";
import App from "./components/App";
import express from "express"
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






app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/index.html",function(req,res){


    res.send("Shahid Hameed <br> 0222222 <br> Fast National University");
  });

ReactDOM.render(<App />, document.getElementById("root"));


app.listen(3000);
