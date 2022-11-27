const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    name : {type : String , required : true} ,
    image : {type : String , required : true} , 
    persons : {type : Number , required : true},
    bags : {type : Number , required : true} , 
    fuelType : {type : String , required : true} , 
    color:{type : String , required : true} , 
    rentPerDay: {type : Number , required : true} , 
    brand:{type : String , required : true},
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 

    category : {type : String , required : true},
    description: {type : String , required : true}



}, {timestamps : true}

)
const carModel = mongoose.model('cars' , carSchema)
module.exports = carModel