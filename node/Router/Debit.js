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

debit.delete("/", async (req, res) => {
    const data = await debitSchema.deleteOne({ _id: req.query.id });
    const find = await creditSchema.findById({ _id: req.query.creditId })
    const av = find.availableAmount + Number(req.query.amount)
    const update = await creditSchema.updateOne({ _id: req.query.creditId }, { $set: { availableAmount: av } })
    res.json(data)
    console.log("delete data", data)
})



module.exports = debit;
