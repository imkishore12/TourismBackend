const bcrypt = require("bcrypt");
const saltRound = 10;
const secretKey = 'kishore';
// console.log(secretKey)
const jwt = require('jsonwebtoken')
// const {databasename}=require('../Config/db')
// let arr = []; //database
// const userCollection=databasename.collection("clientDetails")
const userCollection=require('../Model/userModel')


const login = async (req, res) => {
    const data = req.body; //user input data for login
    console.log(data);
  
    // const account = arr.find((item) => item.email === data.email);
    const account = await userCollection.findOne({email:data.email});
    console.log(account, "account");
  
    if (account) {
      const login = await bcrypt.compare(data.password, account.password);
      console.log(login, "login");
      if (login) {
        const token = jwt.sign({user:data.email},secretKey,{expiresIn:"365d"})
        return res.send({msg:"User Logged in successfully",token:token});
      } else {
        return res.send("Password is incorrect");
      }
    } else {
      return res.send("user is not registered");
    }
  }

const register = async(req, res) => {
    const data = req.body; //body parsing
    console.log(data) //{ email: 'abc@gmail.com', password: '123456789' }
  
    // const account = arr.find((item) => item.email === data.email);
    const account = await userCollection.findOne({email:data.email});
    console.log(account,"account")
    if(account){
      return res.send({msg:"This email is already exist"})

    }
  
    //encrypt the password by hashing the password
    data.password = bcrypt.hashSync(data.password, saltRound);
    // console.log(data); //{email: 'abc@gmail.com',password: '$2b$10$gJLAsucy2yviXqnEYrxXrORXfCTORQRd4yt9ED7P/OKciQfa6luLS' }
  
    const insertdata=await userCollection.create(data)
    // arr.push(data);
    // console.log(arr);
  
    const token = jwt.sign({user:data.email},secretKey)  //jwt token generation  
  
    return res.send({msg:"user Registered successfully", token:token,insertdata:insertdata});
  };
  

const tourpackages = (req,res)=>{
    res.send({msg:"Welcome to home page"})
  }


const touroffers= (req,res)=>{
  res.send({msg:"Welcome to cart"})
}
module.exports = {login,register,tourpackages,touroffers}