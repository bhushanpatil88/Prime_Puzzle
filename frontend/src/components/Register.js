import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterValidation from './RegisterValidation'
import axios from 'axios'


export const Register = () =>{
    const navigate = useNavigate();
    const [values,setValues] = useState({
        email:'',
        password:'',
        confirmPassword:'',          
    })

    const [errors,setErrors] = useState({})

    const handleInput = (e)=>{
        setValues((prev)=>({...prev,[e.target.name]:[e.target.value] }) )
        
       
    }

    const handleSubmit =  (e)=>{
        e.preventDefault();     
        setErrors(RegisterValidation(values))

        if(errors.email==="" && errors.password==="" && errors.confirmPassword===""){
            
            axios.post("http://localhost:3001/register",values)
            .then(res=> navigate("/"))
            .catch(err=>
                console.log(err)
              
            )
            
        }
          
    }
    return (

        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
       <div className='bg-white p-3 rounded w-25'>
       <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input onChange={handleInput} name="email" className="form-control rounded-0" type='email' placeholder='Enter Email' />
                {errors.email && <span  className="text-danger">{errors.email}</span>}
            </div>
            <div>
                <label htmlFor='password'><strong>Password</strong></label>
                <input onChange={handleInput} name="password" className="form-control rounded-0" type='password' placeholder='Enter Password' />
                {errors.password && <span  className="text-danger">{errors.password}</span>}<br />
            </div>
            <div>
                <label htmlFor='confirmPassword'><strong>Confirm Password</strong></label>
                <input onChange={handleInput} name="confirmPassword" className="form-control rounded-0" type='password' placeholder='Confirm Password' />
                {errors.confirmPassword && <span  className="text-danger">{errors.confirmPassword}</span>}
            </div>
            <p></p>
            <button type="submit" className='btn btn-success w-100 '><strong>Register</strong></button><br/>
            <p>Already have an account?</p>
            <Link to="/" className='btn btn-default  border w-100 bg-light'>Login</Link>
        </form>
       </div>
    </div>
    );
}

export default Register;