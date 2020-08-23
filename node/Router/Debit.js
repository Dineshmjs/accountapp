const debit = require('express').Router();
const debitSchema = require('../Schema/Debit');
const creditSchema = require('../Schema/Credit');

debit.post("/", async (req, res) => {
    const postData = {
        ...req.body,
        availableAmount: req.body.amount
    }

    const data = await new debitSchema(postData)
    const credit = await creditSchema.findById({ _id: req.body.credit })
    await data.save(async (err) => {
        if (!err) {
            const av = credit.availableAmount - req.body.amount
            const update = await creditSchema.updateOne({ _id: req.body.credit }, { $set: { availableAmount: av } })
        }
        if (err) {
            console.log("Error", err)
        }
    })
    res.send(data)


})

debit.get("/", async (req, res) => {
    const data = await debitSchema.find({ credit: req.query.id });
    res.json(data)
})

debit.get("/id", async (req, res) => {
    const data = await debitSchema.findById({ _id: req.query.id });
    res.json(data)
})

debit.delete("/", async (req, res) => {
    const data = await debitSchema.deleteOne({ _id: req.query.id });
    const find = await creditSchema.findById({ _id: req.query.creditId })
    const av = find.availableAmount + Number(req.query.amount)
    const update = await creditSchema.updateOne({ _id: req.query.creditId }, { $set: { availableAmount: av } })
    res.json(data)
    console.log("delete data", data)
})

debit.put("/", async (req, res) => {
    const {reason,amount,credit,_id} = req.body

    const prevCredit = await creditSchema.findById({_id:credit})
    const prevAmount = await debitSchema.findById({_id:_id})
    
    if(prevAmount.amount < amount){
        diff = amount - prevAmount.amount
        av = prevCredit.availableAmount - diff
    }
    if(prevAmount.amount > amount ){
        diff = prevAmount.amount - amount
        av = prevCredit.availableAmount + diff
    }
    if(prevAmount.amount === amount){
        av =prevCredit.availableAmount 
    }

    const updateCredit = await creditSchema.updateOne({_id:credit},{$set:{availableAmount:av}})

    const find ={
        _id:_id
    }
    const update = {
        $set:{
            reason:reason,
            amount:amount,
            availableAmount:amount
        }
    }
    const updateDebit = await debitSchema.updateOne(find,update) 
    res.json(updateDebit)

})



module.exports = debit;
