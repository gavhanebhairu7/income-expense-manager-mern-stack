const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')

const schema= new mongoose.Schema(
    {
        text:{
            type:String,
            default:"untitled"
        },
        amount:{
            type:Number,
            required:[true, "please add some amount"]
        },
        username:{
            type:String,
            required:[true, "username is required"]
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }
)
model = mongoose.model("transactions", schema);
module.exports ={TransactionModel: model};