const mongoose = require("mongoose");
const schema = mongoose.Schema;
const item = new schema({
   title:String,
   content:String,
   idUser:String
},{timestamps:true});
const Notes=mongoose.model("note",item);
module.exports=Notes;