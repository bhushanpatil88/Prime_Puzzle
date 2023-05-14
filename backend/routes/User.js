const express = require("express");
const router = express.Router();
const {Users}  = require("../models")


router.post("/register",async (req,res)=>{
    const email = req.body.email[0];
    const password = req.body.password[0];
    const user = {
        email:email,
        password:password
    }
    await Users.create(user);
    res.json(user);

 
})


router.post("/login", async (req, res) => {
    const email = req.body.email[0];
    const password = req.body.password[0];
    const user = {
        email:email,
        password:password
    }

  const userWithEmail = await Users.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  if (userWithEmail.password !== password)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

 

  res.json({ message: "Welcome Back!" });
});

module.exports = router;



