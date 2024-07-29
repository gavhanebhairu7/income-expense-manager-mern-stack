const express =require("express");
const morgan =require("morgan");
const dotenv = require("dotenv");
dotenv.config({path:"./config/config.env"});
const colors =require("colors");
const app = express();

var cors = require('cors');
app.use(cors());
app.use(express.json())
const connectDB =require("./config/db")
connectDB();



const {TransactionRouter} =require("./routes/TransactionRouter")

const PORT= process.env.PORT || 3000;
app.get("/", (req, res)=>{
    console.log("request is recieved from client");
    res.send("Hello World !")})
app.use("/api/v1/transactions", TransactionRouter)


app.listen(3000, (err)=>{
    if(!err){
        console.log(`server running in ${process.env.NODE_ENV} mode and listening on ${PORT}`.yellow.bold);
    }
    else{
        console.log("unable to connect to server:", err);
    }
})