const debit = require('express').Router();
const debitSchema = require('../Schema/Debit');
// const debitExits = require('../Schema/DebitExits');
// const creditSchema = require('../Schema/Credit')
const account = require('../Schema/account');

debit.get("/", async (req, res) => {
    const data = await account.find();
    res.send(data)
})

debit.get("/reason", async (req, res) => {
    const data = await account.findOne({ reason: req.query.credit});
    res.send(data)
})

debit.get("/amount", async (req, res) => {
    const data = await account.findOne({ "debit.reason":req.query.debit});
    res.send(data)
})

debit.post("/", async (req, res) => {
    const postData = {
        ...req.body,
        availableAmount: req.body.amount
    }
    console.log(postData)
    const insert = await account.updateOne({reason:req.body.credit}, {$push : { debit:postData }},(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            console.log(result)
        }
    })
    console.log(insert)

    // await insert.save(async (err) => {
    //     if (!err) {
    //         const available = await creditSchema.findOne({ reason: req.body.credit })
    //         const amount = available.availableAmount - req.body.amount;            
    //         await creditSchema.findOneAndUpdate({ reason: req.body.credit }, { availableAmount: amount })
    //     }

    // })
})

debit.post("/exits", async (req, res) => {

   

    const insert = await account.updateOne({reason:req.body.credit,"debit.reason":req.body.debit}, {$push : { "debit.$.nestDebit":req.body }},(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result){
            console.log(result)
        }
    })

    // await insert.save(async (err) => {
    //     if (!err) {
    //         const available = await debitSchema.findOne({ credit: req.body.credit, reason: req.body.debit })
    //         const amount = available.availableAmount - req.body.amount;
    //         console.log("amount", amount, available)
    //         await debitSchema.findOneAndUpdate({ credit: req.body.credit, reason: req.body.debit }, { availableAmount: amount })
    //     }    
    // })

})

debit.get("/exits", async (req, res) => {
    const data = await account.find();
    res.send(data)

})

module.exports = debit;