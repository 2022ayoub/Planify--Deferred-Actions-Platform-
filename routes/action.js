const express=require("express");
const router=express.Router()
const User=require('../models/user');
const Action=require('../models/action');
const mongoose=require('../config/connect');
const isAuthenticated=require('../middlewares/auth')

router.get("/add",isAuthenticated,async(req,res)=>{
    try{
        let data=await User.findById(req.session.userAuth._id)
        res.render("user/action",{userInfo:data});
    }
    catch(err){res.send(err);}
});

router.post("/add",async(req,res)=>{
    try{
        let data=req.body;
        let action=new Action(data);
        action.idUser=req.session.userAuth._id
        let msg=await action.save();
        res.redirect("/action/add");
        
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
});

module.exports=router