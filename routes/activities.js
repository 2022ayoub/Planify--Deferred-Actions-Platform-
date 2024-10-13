const express=require("express");
const router=express.Router()
const User=require('../models/user');
const Action=require('../models/action');
const mongoose=require('../config/connect');
const isAuthenticated=require('../middlewares/auth')
router.get('/:any/action',isAuthenticated,async(req,res)=>{
    try{
        let data=await User.findById(req.session.userAuth._id)
        res.render("user/activities",{userInfo:data});
    }
    catch(err){
        res.send(err);
    }

});

module.exports=router