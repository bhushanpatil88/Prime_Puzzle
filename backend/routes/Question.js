const express = require("express");
const router = express.Router();
const {Question}  = require("../models")


router.get("/question",async (req,res)=>{
  const questions  = await Question.findAll();
  return res.json(questions)
})


router.post("/question/1", async (req, res) => {
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



