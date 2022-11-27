
const express = require("express");
const router = express.Router();
const car = require("../models/carModel");

router.get("/getallcars", async (req, res) => {
  try {
    const cars = await car.find();
    res.send(cars);
  } catch (error) {
    return res.status(400).json(error);
  }
});



router.post("/addcar",async(req,res)=>
{
 try{
   const newcar=new car(req.body)
   await newcar.save()
   res.send('Car added successfully')
 }
 catch(error)
 {
   return res.status(400).json(error);
 }
});

router.post("/editcar",async(req,res)=>
{
 try{
   const ecar= await car.findOne({_id:req.body._id});
   ecar.name=req.body.name;
   ecar.image=req.body.image;
   ecar.persons=req.body.persons;
   ecar.bags=req.body.bags;
   ecar.fuelType=req.body.fuelType;
   ecar.color=req.body.color;
   ecar.rentPerDay=req.body.rentPerDay;
   ecar.brand=req.body.brand;
   ecar.category =req.body.category;
   ecar.description=req.body.description;
   await ecar.save();

   res.send('Car details updated successfully');
 }
 catch(error)
 {
   return res.status(400).json(error);
 }
});



router.post("/deletecar",async(req,res)=>
{
 try{
    await car.findOneAndDelete({_id:req.body.carid})

   res.send('Car deleted successfully');
 }
 catch(error)
 {
   return res.status(400).json(error);
 }
});
module.exports = router;