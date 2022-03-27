import mongoose, { Schema } from "mongoose";
import { createHmac } from 'crypto';
const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true});
userSchema.methods = {
    authenticate(password){
        return this.password == this.encrytPassword(password);
    },
    encrytPassword(password){
        if(!password) return
        try {
            return createHmac('sha256', '123456').update(password).digest('hex');
        } catch (error) {
            console.log(error);
        }
    }
}
userSchema.pre("save", function(next){
    try {
        this.password = this.encrytPassword(this.password);
        next();
    } catch (error) {
        
    }
})

export default mongoose.model("User", userSchema);