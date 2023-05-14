import { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

import LoginValidation from "./LoginValidation";


import axios from 'axios'




const Login = () =>{
    
    const {isLogin,login} = useContext(AuthContext);
    
    

    const navigate = useNavigate()
    
    const [values,setValues] = useState({
        email:'',
        password:'',          
    })

    const [errors,setErrors] = useState({})

    const handleInput = (e)=>{
        setValues((prev)=>({...prev,[e.target.name]:[e.target.value]}) )

       
    }

    const handleSubmit = (e)=>{
        e.preventDefault();     
        setErrors(LoginValidation(values))
        if(errors.email==="" && errors.password===""){
            axios.post("http://localhost:3001/login",values)
            .then(res=> {
                
                navigate("/question/1")

            }
            )
            .catch(err=>
               
                console.log(err)
            )
            
        }
        
    }

    return (
        

     <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
       <div className='bg-white p-3 rounded w-25'>
       <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input onChange={handleInput} name="email" className="form-control rounded-0" type='email' placeholder='Enter Email' />
                {errors.email && <span  className="text-danger">{errors.email}</span>}
            </div>
            <div>
                <label htmlFor='password'><strong>Password</strong></label>
                <input onChange={handleInput} name="password" className="form-control rounded-0" type='password' placeholder='Enter Password' />
                {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <p></p>
            <button type="submit" className='btn btn-success w-100 ' onClick={login}><strong>Log in</strong></button>
            <p></p>
            <Link to="/register" className='btn btn-default  border w-100 bg-light'>Create Account</Link>
            
        </form>
       </div>
    </div>
        
    );
}

export default Login;