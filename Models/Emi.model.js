const mongoose = require("mongoose")

const EmiSchema = new mongoose.Schema({
    loan:{type:Number,required: true},
    rate: {type:Number, required: true},
    tenure: {type:Number,required: true},
})

const EmiModel = mongoose.model("emi",EmiSchema)

module.exports= EmiModel