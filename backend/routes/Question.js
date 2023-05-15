const express = require("express");
const router = express.Router();
const {Question,Users}  = require("../models")
const jwt = require('jsonwebtoken');


router.get("/question/:id",async (req,res)=>{
  const questions  = await Question.findAll();
  const qId = req.params.id;
  const token = req.headers.authorization.split(' ')[1];
  let decoded = jwt.verify(token, 'xyz');
  const user = await Users.findOne({where: {email:decoded.email}})
      let id=1;
      if(qId==2.1)id=2;
      else if(qId==2.2)id=3;
      else if(qId==3)id=4;
      else if(qId==4.1)id=5;
      else if(qId==4.2)id=6;
      else if(qId==5)id=7;
      else if(qId==6)id=8;
    
    //backend check
    if(qId==2.2 || qId==4.2 || qId == user.progress) return res.json(questions[id - 1])

    return res.json({error:"access denied"});
})


router.post("/question/:id", async (req, res) => {
    const {answer,token} = req.body;
   
    let decoded = jwt.verify(token, 'xyz');


  const question = await Question.findOne({ where: { question_id: req.params.id } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (!question)
    return res.json({ message: "Solution is Wrong!" });

  
    let count = Number(req.params.id);
    
    if(question.answer_1==answer){
      if(count===2.1 || count===2.2 || count===4.1 || count===4.2)count = Math.round(count);
      
    
      if(count&1 && count!=5)count+=1.1;
      else count+=1;

      try {
        const user = await Users.update(
          { progress:count.toString()  },
          { where: { email:decoded.email } }
        )
      } catch (e) {
        console.log(e);
      }
      
      return res.json({message:"Question Solved!",next:count});
    }
    else if(count==3 || (answer!=0 && question.answer_2==answer)){
      if(count===2.1 || count===2.2 || count===4.1 || count===4.2)count = Math.round(count);
      if(count&1)count+=1.2;
      else count+=1;
      

      return res.json({message:"Question Solved!",next:count});
    }
    else res.json({message:"Answer is Wrong"});
    



});




module.exports = router;



