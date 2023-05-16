const express = require("express");
const router = express.Router();
const {Users}  = require("../models")
const jwt = require('jsonwebtoken');



const SECRET = 'xyz';

router.post("/register",async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    const user = {
        email:email,
        password:password,
        progress:"1",
    }
    
    await Users.create(user);

    const token = jwt.sign({email:user.email}, SECRET);

    return res.status(201).json({token, progress: user.progress});
})


router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
  try{
    const userWithEmail = await Users.findOne({ where: { email } })

    if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  if (userWithEmail.password != password)
    return res
      .status(400)
      .json({ message: "Email or Password does not match!" });

    const token = jwt.sign({email:userWithEmail.email}, SECRET);

    return res.json({ token,progress:userWithEmail.progress});
  }
  catch(err){
      console.log("Error: ", err);
  }
});

router.get("/users",async (req,res)=>{
  const users  = await Users.findAll();
  return res.json(users);

})

module.exports = router;



