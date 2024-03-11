import mongoose,{Schema} from "mongoose";

const product_Schema=new Schema({
    name:{
        type:String,
        require:true
    },

    desc: {
        type:String
    },

    SKU:{
        type: String
    },

    category_id:{
       type : Schema.Types.ObjectId,
       ref:"Category"

    },

    inventory_id:{
        type :Schema.Types.ObjectId,
        ref :"Inventory"
    },

    price :{
        type :Decimal128
    },

    discount_id:{
        type:Schema.Types.ObjectId,
        ref:"Discount"
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

export const Product=mongoose.model("Product",product_Schema)