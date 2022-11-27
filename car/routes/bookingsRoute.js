const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const car = require("../models/carModel")




router.post("/bookcar",async(req,res)=>
{
   
  try {
    
   

   
   
    
  
    
       

    
         
        const newbooking=new Booking(req.body)
        await newbooking.save()
        const qcar = await car.findOne({ _id: req.body.car });
         console.log(req.body.qcar);
          qcar.bookedTimeSlots.push(req.body.bookedTimeSlots);

        await qcar.save();
        res.send("Your booking is successful")
      
     }
     
   
    
    
 catch (error) {
     console.log(error)
     return res.status(400).json(error);
    
}

  

});

router.get("/getallbookings", async(req, res) => {

    try {

        const bookings = await Booking.find().populate('car')
        res.send(bookings)
        
    } catch (error) {
        return res.status(400).json(error);
    }
  
});

   


module.exports=router;