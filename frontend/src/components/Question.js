import { useEffect, useState } from "react";
import {  useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import Error from "./Error";

const Question = ()=>{
    
    const params = useParams();
    const [question,setQuestion] = useState({});
    

    useEffect(()=>{
        axios.get("http://localhost:3001/question").then(function (response) {
        
      let id=1;
      if(params.id==2.1)id=2;
      else if(params.id==2.2)id=3;
      else if(params.id==3)id=4;
      else if(params.id==4.1)id=5;
      else if(params.id==4.2)id=6;
      else if(params.id==5)id=7;
      else if(params.id=="end")id=8;  
      setQuestion(response.data[id-1]);
    });
    },[params])

   
    const navigate  = useNavigate();

    
    const [ans,setAns] = useState("");
    const [error,setError] = useState();

    // Render only valid pages
    if(params.id!=1 && params.id!=2.1 && params.id!=2.2 && params.id!=4.1 && params.id!=4.2 && params.id!=3 && params.id!=5 && params.id!="end" ){

        return <Error/>
    }
    
    
    const handleInput = (e) =>{
        setAns(e.target.value);
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        if(ans===""){
            setError("Your answer is Empty");
            return;
        }
        setError("");
        try {

            const res = await axios.post(`http://localhost:3001/question/${params.id}`,{id:params.id,answer:ans});
            
            if(res.data.message=="Answer is Wrong"){
                setError("Answer is Wrong");
                return;
            }
            navigate(`/question/${res.data.next}`)
        } catch (e) {
            console.log(e);
        }
        
           
        
      
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
       <div className='bg-white p-5 rounded w-70 '>
       <form onSubmit={submitHandler}>
            {params.id!="end" && <h2>Question {params.id}</h2>}
            <div className='mb-3'>
              
                    <p>{question.question_1}</p><br/>
                    <p>{question.question_2}</p>
            
            
               {(params.id!=2.2 && params.id!=4.2 && params.id!="end") ? <input onChange={handleInput} name="question" className="form-control rounded-0" type='question' placeholder='Your Answer' />:<p></p>}
                {error && <span  className="text-danger">{error}</span>}
            </div>
            <p></p>
            
            {(params.id!=2.2 && params.id!=4.2 && params.id!="end") ? <button type="submit" className='btn btn-success w-100 '><strong>Submit</strong></button>:<p></p>}
            <p></p>
            
            
        </form>
       </div>
    </div>
    
        );
}

export default Question;