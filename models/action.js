const mongoose=require("mongoose");
const schema=mongoose.Schema;
const item=new schema({
   idUser:String,
   title:String,
   description:String,
   'date-run':String,
   'time-run':String
});
const Action=mongoose.model("action",item);
module.exports=Action;