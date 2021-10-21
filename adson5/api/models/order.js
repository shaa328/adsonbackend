const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    product: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', require: true

        
        },
    image: { type:String, require: true}
    
})
module.exports = mongoose.model('Order',orderSchema);