const { Router } = require("express");

const EmiModel = require("../Models/Emi.model");

const Emi = Router();









//Emi Calcualtion
Emi.post("/emi", async(req,res)=>{
    const {loan, tenure,rate} =req.body;
   
   try {
    const calc = loan*rate*(1+rate)*tenure/((1+rate)*tenure-1)
    
res.send({emi:calc})

   } catch (error) {
    res.send('error')
   }

   console.log(calc)
   




  
    
  })
  module.exports=Emi