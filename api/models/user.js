import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthdate: Date,
    phone: Number,
    email: String,
    password: String,
    shippingAddress: String
})

export default mongoose.model('User', userSchema)