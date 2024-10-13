const mongoose=require("mongoose");
const schema=mongoose.Schema;
const item=new schema({
   fname:String,
   email:String,
   password:String,
   age:Number,
   country:String,
   phone:Number,
   avatar:String,
});
const User=mongoose.model("user",item);
module.exports=User;