import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/features/authenticatio/Authapi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/authenticatio/AuthSlice';
const Login = () => {
    const [email,setEmail]  = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const [loginUser,{isLoading : loginLoading}] = useLoginUserMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLoginbutton = async (e) =>{
            e.preventDefault(); // to stop screen from refreshing.
            const data = {
                email,
                password
            }
            try {
                const response = await loginUser(data).unwrap();
                // console.log(response);
                const {token,user}  = response;
                // console.log(token);
                navigate('/');
                dispatch(setUser({user}));
                alert("Login successful");
                
            } catch (error) {
                setMessage("Please Provide a vaild Email and Password");
                setEmail('');
                setPassword('');
            }
    }
    return (
        <div className='max-w-sm bg-white mx-auto p-8 mt-36 shadow-md'>
            <h2 className='text-2xl font-semibold text-center '>Please Login</h2>
            <form onSubmit={handleLoginbutton} className='space-y-5 max-w-sm mx-auto pt-8'>
                <input 
                className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                type = "email"
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
                value ={email}>  
                </input>
                <input 
                className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                type = "password"
                placeholder='Password'
                required
                onChange={(e) => setPassword(e.target.value)}
                value ={password}>  
                </input>
                {
                    message && <p className='text-red-500'>{message}</p>
                }
                <button
                disabled = {loginLoading}
                 className='font-medium w-full mt-5 bg-Primary hover:bg-indigo-500 px-5 py-3 text-white rounded-md'>Login</button>
                {
                    <p className='text-center'>Don't have an account? <Link to='/register' className='text-red-500'>Register</Link> here.</p>
                }
            </form>
        </div>
    );
}

export default Login;
