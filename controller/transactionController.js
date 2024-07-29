const {TransactionModel} = require("../models/TransactionModel");

//@desc get all transactions
//@route GET /api/v1/transactions
getTransaction =async (req, res, next)=>{
    try{
        //get data from database
        console.log("request recieved to get data");
        const username = req.params.username;
        const data = await TransactionModel.find({username:username});
        res.status(200).json({
            success: true,
            count:data.length,
            data:data
        })
    }
    catch(err){
        console.log("controller:: transactionController :: err", err);
    }
}

//@desc add a transaction
//@route POST /api/v1/transactions
postTransaction =async (req, res, next)=>{
    //add the object from req body to database
    try{
        //post data to database
        const obj = req.body;
        const newObj ={...req.body, username:req.params.username}
        const transaction = await TransactionModel.create(newObj);
        res.status(201).json({
            success: true,
            count:1,
            data:transaction
        })
    }
    catch(err){
        console.log("controller:: transactionController :: err", err);
        if(err.errors.amount.name == "ValidatorError")
            return res.status(400).json({
                success: false,
                error:err.errors.amount.message
        })
        else return res.status(500).json({
            success: false,
            error:"server error"
        })
        
    }
}

//@desc delete a transactions
//@route DELETE /api/v1/transactions/:id
deleteTransaction = async (req, res, next)=>{
    
    try{
        const id =req.params.id;
        const result = await TransactionModel.findById(id);
        if(!result){
            return res.status(404).json({
                success:false,
                error: "data not found !"
            })
        }
        const response = await TransactionModel.deleteOne({_id: id});

        res.status(200).json({
            success: true,
            count:1,
            data: response
        })
    }
    catch(err){
        console.log("Controller:: transaction :: delete :: err", err);
    }
    //remove here
}



module.exports ={getTransaction, postTransaction, deleteTransaction};