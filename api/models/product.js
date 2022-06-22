import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    provider: String,
    stock: Number,
    price: Number,
    category: String,
    specifications: String,
    description: String
})

export default mongoose.model('Product', productSchema)