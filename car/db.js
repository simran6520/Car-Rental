const mongoose= require("mongoose");

function connectDB()
{

    mongoose.connect('mongodb+srv://simran:1234@cluster0.njsa5.mongodb.net/Cars_1',{useUnifiedTopology:true,useNewUrlParser:true})

    const connection=mongoose.connection
    connection.on('connected',()=>{
        console.log('Mongo DB Connection Successful')
    })

    connection.on('error',()=>{
        console.log('Mongo DB Connection Error ')
    })
}

connectDB()

module.exports=mongoose