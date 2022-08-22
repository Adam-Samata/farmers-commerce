const mongoose=require("mongoose");

const {Schema,model}=mongoose;

const productSchema=new Schema({
name: String,
    description: String,
    price: Number,
    category: String,
    image: String,    
    qnty: Number,
    isNewProduct: Boolean,
},{
    timestamps: true,
});

const Product=model("product",productSchema);
module.exports=Product;