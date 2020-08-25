const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan')

const Port = process.env.PORT || 2000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const credit = require('./Router/Credit')
const debit = require('./Router/Debit')
const spend = require('./Router/Spend')
const Default = require('./Router/Default')

app.get('/', (req, res) => {
    res.send("Home")
})

app.use("/credit",credit) 
app.use("/debit",debit)
app.use("/default",Default) 
app.use("/spend",spend)

const url ="mongodb+srv://root:dineshmjs@cluster0-y8uer.gcp.mongodb.net/account"
// const url = "mongodb://localhost:27017/account" 
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify : false }, (err) => {
    if (err) {
        console.log(err)
    }

})

app.listen(Port, () => {
    console.log("Server run port 2000")
})