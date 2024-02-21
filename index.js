const express = require("express");

const app=express();
const productRouter=require('./Router/ProductsRouting');
const userRouter=require('./Router/UserRoutes');
const {connection}=require('./Config/db')
require('dotenv').config()
const port=process.env.PORT
// const {route}=require("./Router/UserRoutes");
const cors=require("cors");
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/user',userRouter)
app.use('/products',productRouter)

app.listen(port,async()=>{
    try{
        connection();
        console.log("sever is running fine");
    }
    catch(err){
        console.log(err,"error")
    }
     
})