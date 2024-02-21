// const {MongoClient}=require('mongodb')
const mongoose=require('mongoose');
require('dotenv').config()
const password=process.env.PASSWORD
// const client=new MongoClient("mongodb://127.0.0.1:27017")
// const clientClouddb=new MongoClient(`mongodb+srv://kishore:${password}@cluster0.pu1dzom.mongodb.net/?retryWrites=true&w=majority`)
const clientClouddb=`mongodb+srv://kishore:${password}@cluster0.pu1dzom.mongodb.net/IndiaTourism?retryWrites=true&w=majority`
const connection=async()=>{
    try{
        // await clientClouddb.connect()
        await mongoose.connect(clientClouddb)
        console.log("Connected to Mongo")
    }
    catch(err){
        console.log(err,'error')

    }
}
// const databasename=clientClouddb.db("Ecommerce")
module.exports ={connection,mongoose};
