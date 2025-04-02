const { mongo } = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId:{type:String, required:true},
    products:[
        {
            productId:(type:mongoose.Schema.Types.ObjectId, ref:'Product' },
        }
    ]
})