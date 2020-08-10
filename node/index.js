const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const credit = require('./Router/Credit')
const debit = require('./Router/Debit')

app.get('/', (req, res) => {
    res.send("Home")
})

app.use("/credit",credit) 
app.use("/debit",debit)

mongoose.connect("mongodb://localhost:27017/account", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify : false }, (err) => {
    if (err) {
        console.log(err)
    }

})

app.listen(2000, () => {
    console.log("Server run port 2000")
})