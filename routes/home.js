const express=require("express");
const router=express.Router()

router.get("/",(req,res)=>{
    try{
        res.render("home");
    }
    catch(err){res.send(err);}
});
module.exports=router