import mongoose , {ObjectId  } from "mongoose";
import user from "./users"
import products from "./products"
const orderSchema = mongoose.Schema({
    userid : {     
        type: ObjectId,
        ref : user
    },
    productid : {     
        type: ObjectId,
        ref : products
    },
    name : {
        type: String,
        required : true
    },
    phone : {
        type: Number,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    total : {
        type : Number,
        required :true
    },
    status: {
        type : Number,
        default : 0
    }
},{timestamps : true})
export default mongoose.model("Order",orderSchema);