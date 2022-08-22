const mongoose=require("mongoose")

//connect to mongodb
const connectDb=async()=>{
   try{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true,

    });
    console.log("mongoDb connected");

   }catch (err) {
    console.log(err);

   }
};
module.exports=connectDb;