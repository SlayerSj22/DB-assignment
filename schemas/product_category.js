import mongoose,{Schema} from "mongoose";

const product_category_schema= new Schema({
    name:{
        type:String,
        require :true
    },

    desc:{
        type:String,
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

export const Category= mongoose.model("Category",product_category_schema)