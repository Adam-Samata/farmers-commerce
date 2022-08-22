
const express = require("express")

require("dotenv").config();

const cors=require("cors");

const products=require("./datasource/products");

const connectDb=require("./utils/connect.db");

connectDb();
const usersRouter=require("./routes/users.routes");
const productsRouter=require("./routes/products.routes")

//initialize express object
const app = express()

//express middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",usersRouter);
app.use("/api/products",productsRouter);

//home raute
// app.get("/", function (req, res){
//     res.send("<h1>welcome to our farmers Db</h1>")                                                       cx
// })

//get all products
app.get("/api/v1/products",(request,response) =>{
response.json({
    success:true,
    data:products
});   
})
//save data to db
app.post("/api/v1/products",(req,res)=>{
   
    res.json({
        success:true,
        data:[req.body,...products],
    });
});

const port= process.env.PORT

app.listen(port, function (){
    console.log("server started on port :" +port);
})