import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    date: Date,
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [
        {
            product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number
        }
    ],
    
})

export default mongoose.model('Order', orderSchema)