import mongoose,{Schema} from "mongoose";

const discount_schema=new Schema({

    name:{
        type:String,
        require:true
    },

    desc:{
        type:String
    },

    discount_percent:{
        type:Decimal128,
        require:true
    },
    active:{
        type:Boolean,
        require: true
    },

    deletedAt: {
        type: Date,
        default: null
      }
})

export const Discount = mongoose.model("Discount",discount_schema)