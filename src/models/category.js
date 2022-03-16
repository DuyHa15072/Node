import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
   name : {
       type: String,
       trim: true,
       require: true
   },
   slug: {
       type: String,
       lowercase: true,
       unique: true,
       index: true
   }
},{timestamps: true});

export default mongoose.model("Category", categorySchema);