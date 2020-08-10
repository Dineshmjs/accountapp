const debit = require('express').Router();
const debitSchema = require('../Schema/Debit');
const debitExits = require('../Schema/DebitExits');
const creditSchema = require('../Schema/Credit')

debit.get("/", async (req, res) => {
    const data = await debitSchema.find();
    res.send(data)
})

debit.get("/reason", async (req, res) => {
    const data = await debitSchema.find({ credit: req.query.reason });
    res.send(data)
})

debit.get("/amount", async (req, res) => {
    const data = await debitSchema.findOne({ reason: req.query.reason });
    res.send(data)
})

debit.post("/", async (req, res) => {
    const postData = {
        ...req.body,
        availableAmount: req.body.amount
    }

    const insert = await new debitSchema(postData)
    await insert.save(async (err) => {
        if (!err) {
            const available = await creditSchema.findOne({ reason: req.body.credit })
            const amount = available.availableAmount - req.body.amount;            
            await creditSchema.findOneAndUpdate({ reason: req.body.credit }, { availableAmount: amount })
        }

    })
})

debit.post("/exits", async (req, res) => {

    const insert = await new debitExits({
        ...req.body
    })

    await insert.save(async (err) => {
        if (!err) {
            const available = await debitSchema.findOne({ credit: req.body.credit, reason: req.body.debit })
            const amount = available.availableAmount - req.body.amount;
            console.log("amount", amount, available)
            await debitSchema.findOneAndUpdate({ credit: req.body.credit, reason: req.body.debit }, { availableAmount: amount })
        }    
    })

})

debit.get("/exits", async (req, res) => {
    const data = await debitExits.find();
    res.send(data)

})

module.exports = debit;