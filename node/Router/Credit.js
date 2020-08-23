const credit = require('express').Router();
const creditSchema = require('../Schema/Credit');

credit.post("/",async(req,res)=>{
    const {reason,amount} = req.body;
    const postData = {
        ...req.body,
        availableAmount:req.body.amount
    }
    console.log(postData)
    const data = await new creditSchema(postData)
    await data.save()
    res.send(data)
    

})  

credit.get("/", async(req,res)=>{
    const data = await creditSchema.find();
    res.json(data)
})

credit.get("/id", async(req,res)=>{
    const data = await creditSchema.findById({_id:req.query.id});   
    res.json(data)
})

credit.delete("/", async(req,res)=>{
    const data = await creditSchema.deleteOne({_id:req.query.id});   
    res.json(data)
})

credit.put("/", async(req,res)=>{
    var av,diff;

    const {_id,reason,amount,availableAmount} = req.body

    const prevAmount = await creditSchema.findById({_id:_id})

    if(prevAmount.amount < amount){
        diff = amount - prevAmount.amount
        av = availableAmount + diff
    }
    if(prevAmount.amount > amount ){
        diff = prevAmount.amount - amount
        av = availableAmount - diff
    }
    if(prevAmount.amount === amount){
        av = availableAmount 
    }

    const find = {
        _id : _id
    }
    const updateValues = {
        reason:reason,
        amount:amount,
        availableAmount:av
    }
    
    const update = await creditSchema.updateOne(find,{$set:updateValues});   
    res.json(update)
})


module.exports = credit;
 