const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');
const Schema = mongoose.Schema;
const peopleSchema = new Schema({
    name : { type : String, required : true, max : [127, "Max Length is 127 characters"] }
});




module.exports = mongoose.model('Person', peopleSchema);