import mongoose, {ObjectId}  from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    slug: {
        type: String, 
        lowercase: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true} )

export default mongoose.model('Product', productSchema);