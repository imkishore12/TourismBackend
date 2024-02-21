const route =  require('express').Router();
const alldata=require("../Data/indiantourism")
route.get("/", (request, response)=>{
    return response.send(alldata)
});
route.get("/home", (request, response)=>{
    return response.send(alldata)
});
route.get("/indiatourism", (request, response)=>{
    return response.send(alldata)
});

route.get("/laptops", (request, response)=>{
    return response.send(alldata)
});
route.get("/tablets", (request, response)=>{
    return response.send(alldata)
});

route.get("/accessories", (request, response)=>{
    return response.send(alldata)
});



module.exports = route