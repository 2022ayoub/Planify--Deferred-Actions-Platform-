const express=require("express");
const router=express.Router()
const User=require('../models/user');
const mongoose=require('../config/connect');

const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken')



router.get("/login",(req,res)=>{
    try{res.render("auth/login");}
    catch(err){res.send(err);}
});


router.get("/register",(req,res)=>{
    try{res.render("auth/register");}
    catch(err){res.send(err);}
});

router.get("/forget",(req,res)=>{
    try{res.render("auth/forget");}
    catch(err){res.send(err);}
});

// ======= sign up 
router.post("/register",async(req,res)=>{
    try{
        let data=req.body;
        let user=new User(data);
        let test=await User.findOne({email:data.email});
        if(test!=null){res.status(400).send("invalid data");}
        else{
            let salt=bcrypt.genSaltSync(10);
            let cryptpass=await bcrypt.hashSync(data.password,salt);
            user.password=cryptpass;
            let msg=await user.save();
            res.redirect("auth/login");
        }
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
});

router.post("/login",async(req,res)=>{
    try{
         
         let info=req.body;
         let testuser=await User.findOne({email:info.email});
         if(testuser===null){res.status(404).send("invalid data");}
         else{
             let validpass=await bcrypt.compare(info.password,testuser.password);
             if(!validpass){res.status(401).send("invalid data");}
             else{
                 let payload={
                     _id:testuser._id,
                     fname:testuser.fname,
                     email:testuser.email,
                     password:testuser.password
                 }
                 let secretkey="planify2425";
                 let token=jwt.sign(payload,secretkey,{expiresIn:'1h'});
                 req.session.userAuth=payload;
                 return res.redirect('/action/add');
             }
         }
         
    }
    catch(err){res.status(500).send({message:err.message});}
 
});

module.exports=router