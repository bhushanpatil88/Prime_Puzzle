import { useEffect, useState } from "react";
import {  useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import Error from "./Error";
const Question = ()=>{
    
    const params = useParams();
    const [question,setQuestion] = useState({});
    const [count,setCount] = useState(Number(params.id));

    useEffect(()=>{
        axios.get("http://localhost:3001/question").then(function (response) {
      
      setQuestion(response.data[0]);
    });
    },[])

   
    const navigate  = useNavigate();

    
    const [ans,setAns] = useState("");
    const [error,setError] = useState();

    //Render only valid pages
    if(params.id!=1 && params.id!=2.1 && params.id!=2.2 && params.id!=4.1 && params.id!=4.2 && params.id!=3 && params.id!=5 ){
        return <Error/>
    }
    
    
    const handleInput = (e) =>{
        setAns(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if(ans===""){
            setError("Your answer is Empty");
            return;
        }
        setError("");

        axios.post(`http://localhost:3001/question/${params.id}`,{answer:ans})
        .then(res=> {
        
            if(ans==question.answer_1){
                if(count===2.1 || count===2.2 || count===4.1 || count===4.2)setCount(Math.round(count));
                
                if(count&1)setCount(count+1.1);
                else setCount(count+1);

                navigate(`/question/${count}`)
            }
            else if(question.answer_2!=0 && ans==question.answer_2){
                if(count===2.1 || count===2.2 || count===4.1 || count===4.2)setCount(Math.round(count));

                if(count&1)setCount(count+1.2);
                else setCount(count+1);

                navigate(`/question/${count}`)
                
            }
            else{
                setError("Entered Wrong Answer")
            }
        }
        
        )
        .catch(err=>console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
       <div className='bg-white p-5 rounded w-70 '>
       <form onSubmit={submitHandler}>
            <h2>Question {params.id}</h2>
            <div className='mb-3'>
                <p>{question.question_1}</p><br/>
                <p>{question.question_2}</p>
                
                <input onChange={handleInput} name="question" className="form-control rounded-0" type='question' placeholder='Your Answer' />
                {error && <span  className="text-danger">{error}</span>}
            </div>
            <p></p>
            <button type="submit" className='btn btn-success w-100 '><strong>Submit</strong></button>
            <p></p>
            
            
        </form>
       </div>
    </div>
    
        );
}

export default Question;