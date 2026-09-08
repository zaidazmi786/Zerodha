const {model}=require("mongoose")
const PositionSchema=require("../Schema/PositionSchema")

const PositionModel= model("position",PositionSchema);

module.exports=PositionModel;