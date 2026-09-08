const {model}=require("mongoose")

const OrderSchema=require("../Schema/OrderSchema");

const OrderModel=model("order",OrderSchema);

module.exports=OrderModel;