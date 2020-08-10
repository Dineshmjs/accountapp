const mongoose = require('mongoose');

const debit = mongoose.Schema({
    credit:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    availableAmount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }


}) 

module.exports = mongoose.model("debits",debit);