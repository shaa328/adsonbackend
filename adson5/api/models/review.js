const mongoose = require ('mongoose')
const reviewSchema = mongoose.Schema({
    review :{
        type:String,
        required :true
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    
      
    
})

module.exports = mongoose.model('Review',reviewSchema);