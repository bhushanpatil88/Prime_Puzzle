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
      if(count===2.1 || count===2.2 || count===4.1 || count===4.2)setCount(Math.round(count));
      if(count&1)count+=1.1;
      
      else count+=1;

      return res.json({message:"Question Solved!",next:count});
    }
    else if(question.answer_2==answer){
      if(count===2.1 || count===2.2 || count===4.1 || count===4.2)setCount(Math.round(count));
      if(count&1)count+=1.2;
      else count+=1;

      return res.json({message:"Question Solved!",next:count});
    }
    else res.json({message:"Answer is Wrong"});
    



});

router.post("/question/2.1", async (req, res) => {
  const answer = req.body.answer;

 

//   const question = await Question.findOne({ where: { question } }).catch(
//     (err) => {
//       console.log("Error: ", err);
//     }
//   );

//   if (!question)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });

//   if (question.answer !== answer)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });



res.json({ message: "Question Solved!" });
});

router.post("/question/2.2", async (req, res) => {
  const answer = req.body.answer;

 

//   const question = await Question.findOne({ where: { question } }).catch(
//     (err) => {
//       console.log("Error: ", err);
//     }
//   );

//   if (!question)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });

//   if (question.answer !== answer)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });



res.json({ message: "Question Solved!" });
});

router.post("/question/3", async (req, res) => {
  const answer = req.body.answer;

 

//   const question = await Question.findOne({ where: { question } }).catch(
//     (err) => {
//       console.log("Error: ", err);
//     }
//   );

//   if (!question)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });

//   if (question.answer !== answer)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });



res.json({ message: "Question Solved!" });
});

router.post("/question/4.1", async (req, res) => {
  const answer = req.body.answer;

 

//   const question = await Question.findOne({ where: { question } }).catch(
//     (err) => {
//       console.log("Error: ", err);
//     }
//   );

//   if (!question)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });

//   if (question.answer !== answer)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });



res.json({ message: "Question Solved!" });
});

router.post("/question/4.2", async (req, res) => {
  const answer = req.body.answer;

 

//   const question = await Question.findOne({ where: { question } }).catch(
//     (err) => {
//       console.log("Error: ", err);
//     }
//   );

//   if (!question)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });

//   if (question.answer !== answer)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });



res.json({ message: "Question Solved!" });
});

router.post("/question/5", async (req, res) => {
  const answer = req.body.answer;

 

//   const question = await Question.findOne({ where: { question } }).catch(
//     (err) => {
//       console.log("Error: ", err);
//     }
//   );

//   if (!question)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });

//   if (question.answer !== answer)
//     return res
//       .status(400)
//       .json({ message: "Solution is Wrong!" });



res.json({ message: "Question Solved!" });
});


module.exports = router;



