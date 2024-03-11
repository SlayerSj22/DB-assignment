import mongoose,{Schema} from "mongoose";
const product_inventory_schema= new Schema({
    name:{
        type:String,
        require:true
    },

    quantity:{
        type: Int32,
        require:true
    },
    deletedAt: {
        type: Date,
        default: null
      }
 },


{
    timestamps:true
}

)

export const Discount = mongoose.model("Discount",product_inventory_schema);