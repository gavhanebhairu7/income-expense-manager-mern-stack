const mongoose =require('mongoose')
const dotenv =require('dotenv')
const colors =require('colors')
connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`success !, Connection host ${conn.connection.host}`.cyan.underline)
    }
    catch(err){
        console.log("error in connect to database ", err);
    }
}

module.exports =connectDB;