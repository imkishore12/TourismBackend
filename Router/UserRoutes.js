// const express = require('express')
// const route = express.Router()
// const {login,register,about,contact} = require("../Controller/Api")
// const { SpecificAuth } = require('../Middleware/auth')

// route.get('/login',SpecificAuth, login)
// route.get('/register',SpecificAuth, register)
// route.get('/about',about)
// route.get('/contact',contact)

// module.exports = route

const route = require("express").Router()
// const route = express.Router();

const auth = require('../Middleware/auth')

const {login,register,tourpackages,touroffers} =require('../Controller/Api')
route.post("/register",register )
route.post("/login",login );


route.get('/tourpackages',auth,tourpackages)
route.get('/touroffers',auth,touroffers)


module.exports = route;