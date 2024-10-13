const express=require("express");
const router=express.Router()
const User=require('../models/user');
const multer=require('multer')
const fs=require('fs')

let nomAvatar='';
const mystorage=multer.diskStorage({
    destination:`./uploads/avatars`,
    filename:(req,file,redirect)=>{
        let date = Date.now();
        let fn =date+'.'+file.mimetype.split('/')[1];
        redirect(null,fn)
        nomAvatar=fn;
    }
})
const upload=multer({storage:mystorage})



router.get("/:any/get",async(req,res)=>{
    try{
        if(!req.session.userAuth){
            return res.redirect('/auth/login');
        }
        else{
            let data=await User.findById(req.session.userAuth._id)
            res.render("user/profil",{userInfo:data})        
        }
    }
    catch(err){
        res.status(500).send({message:err.message});
    }

});

router.get("/:any/update",async(req,res)=>{
    try{
        if(req.session.userAuth){
            let data=await User.findOne({_id:req.session.userAuth._id})
            res.render("user/updateAction",{userInfo:data});
        }
        else{
            return res.redirect('/auth/login');
        }
    }
    catch(err){
        res.status(500).send({message:err.message});
    }

})

router.put("/update",upload.single('avatar'),async(req,res)=>{
    try{
        let usr = await User.findById(req.session.userAuth._id);
        if(usr && usr.avatar){
            fs.unlink(`uploads/avatars/${usr.avatar}`, (err) => {
                if (err) {
                    console.error('Error while deleting old avatar:', err);
                } else {
                    console.log('Old avatar deleted successfully');
                }
            });
        }
        req.body.avatar=nomAvatar;
        await User.findByIdAndUpdate(req.session.userAuth._id,req.body)
        .then((result)=>{req.session.userAuth = result;nomAvatar=''});
        res.redirect(`/profil/${req.session.userAuth.fname}/get`)
        
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
});

module.exports=router

