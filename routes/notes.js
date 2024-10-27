const express=require("express");
const router=express.Router()
const User=require('../models/user');
const Action=require('../models/action');
const Notes=require('../models/notes');
const mongoose=require('../config/connect');
const isAuthenticated=require('../middlewares/auth');
const moment=require('moment');


router.get("/add",isAuthenticated,async(req,res)=>{
    try{
        let data=await User.findById(req.session.userAuth._id)
        let allNotes=await Notes.find({idUser:req.session.userAuth._id})
        res.render("user/notes",{userInfo:data,allNotes:allNotes,moment:moment});
    }
    catch(err){res.send(err);}
});

router.post('/add',isAuthenticated,async(req,res)=>{
    try{
        req.body.title=req.body.title.trim();
        req.body.content=req.body.content.trim();
        let note=new Notes(req.body)
        note.idUser=req.session.userAuth._id
        let msg = await note.save()
        res.redirect('/notes/add')
    }
    catch(err){
        res.send(err)
    }

});
module.exports=router