const mongoose = require('mongoose');

const debitExits = mongoose.Schema({
    amount: {
        type:Number,
        required:true
    },
    credit: {
        type:String,
        required:true
    },    
    debit: {
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("debitChilds",debitExits);
