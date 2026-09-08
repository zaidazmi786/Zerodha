require("dotenv").config()
const express =require("express")
const HoldingModel=require("./models/HoldingModel")
const PositionModel=require("./models/PositionModel")
const bodyParser=require("body-parser")
const cors =require ("cors")
const OrderModel = require("./models/OrderModel");  

//authentication
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("./models/UserModel");

const app =express();
const mongoose=require("mongoose");
const port = process.env.post || 8080;
const url=process.env.MONGO_URL;
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(url)
  .then(() => console.log('Connected!'));

// app.get("/addposition",async(req,res)=>{
//     let tempPosition=[
 //{
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },

// ]
// tempPosition.forEach((item)=>{
// let newposition=new PositionModel({
//     product:item.product,
//      name:item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss:item.isLoss,

// })
// newposition.save();
// });
// res.send("Positon data done")
// });

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      password: hashedPassword,
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, username: newUser.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, username: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// fetch all holding data

app.get("/allHoldings",async(req ,res)=>{
    let allholding= await HoldingModel.find({})
    res.json(allholding);
})

app.get("/allPosition",async(req,res)=>{
    let allPosition=await PositionModel.find({});
    res.json(allPosition)
})




app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  try {
    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// display order
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrderModel.find({});
  res.json(allOrders);
});

app.listen(port,()=>{
    console.log(`server started with port ${port}`)
});