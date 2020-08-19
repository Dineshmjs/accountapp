const debit = require('express').Router();
const account = require('../Schema/account');





debit.post("/", async (req, res) => {
    console.log("debit")
    const postData =await {
        ...req.body,
        availableAmount: req.body.amount
    }
    console.log(postData)
    const insert = await account.findOneAndUpdate({reason:req.body.credit}, {$push : { debit:postData }}  )
    res.send("DebitPost")    
    
})

debit.get("/",async(req,res)=>{
    const {credit} = req.query;

    const data =await account.findOne({reason:credit})
    res.send(data)
})




module.exports = debit;