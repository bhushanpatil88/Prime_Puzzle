const express = require("express");
const router = express.Router();
const {Question}  = require("../models")


router.get("/question",async (req,res)=>{
  const questions  = await Question.findAll();
  return res.json(questions)
})


router.post("/question/:id", async (req, res) => {
    const {id,answer} = req.body;
  

  const question = await Question.findOne({ where: { question_id: id } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

 

  if (!question)
    return res.json({ message: "Solution is Wrong!" });

  
    let count = Number(id);
    
    if(question.answer_1==answer){
      if(count===2.1 || count===2.2 || count===4.1 || count===4.2)count = Math.round(count);
      if(count==5)return res.json({message:"Treasure Found",next:"end"})
      if(count&1)count+=1.1;
      else count+=1;

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



