const credit = require('express').Router();
const account = require('../Schema/account');

credit.post("/",async(req,res)=>{
    const {reason,amount} = req.body;
    const postData = {
        ...req.body,
        availableAmount:req.body.amount
    }
    console.log(postData)
    const data = await new account(postData)
    await data.save()

    res.send(data)
    

})  

credit.get("/", async(req,res)=>{
    const data = await account.find();
    res.json(data)
})

// credit.get("/amount", async(req,res)=>{
//     const data = await creditSchema.findOne({reason:req.query.reason});
//     res.json(data)
// })

module.exports = credit;
 