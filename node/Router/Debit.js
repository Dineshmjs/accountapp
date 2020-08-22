const debit = require('express').Router();
const debitSchema = require('../Schema/Debit');
const creditSchema = require('../Schema/Credit');

debit.post("/",async(req,res)=>{    
    const postData = {
        ...req.body,
        availableAmount:req.body.amount
    }
    
    const data = await new debitSchema(postData)   
    const credit = await creditSchema.findOne({_id:req.body.credit}) 
    await data.save(async(err)=>{
        if(!err){            
            const av = credit.availableAmount - req.body.amount
            const update = await creditSchema.findOneAndUpdate({_id:req.body.credit},{$set:{availableAmount:av}})           
        }
        if(err){
            console.log("Error",err)
        }
    })
    res.send(data)
    

})  

debit.get("/", async(req,res)=>{
    const data = await debitSchema.find({credit:req.query.id});
    res.json(data)
})

// credit.get("/amount", async(req,res)=>{
//     const data = await debitSchema.findOne({reason:req.query.reason});
//     res.json(data)
// })

module.exports = debit;
 