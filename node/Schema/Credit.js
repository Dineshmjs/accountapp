const mongoose = require('mongoose')

const credit = mongoose.Schema({
    reason : {
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

module.exports = mongoose.model("credits",credit)