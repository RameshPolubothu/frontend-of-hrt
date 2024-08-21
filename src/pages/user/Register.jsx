import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../redux/features/authenticatio/Authapi';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [registerUser, { isLoading}] = useRegisterUserMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset message
        setMessage('');


        try {
            // Call the mutation function
            await registerUser({ username, email, password }).unwrap();
            // Handle success (e.g., display a success message, redirect, etc.)
            alert('Successful registration');
            setMessage('Registration successful!');
            navigate('/login');
            
        } catch (err) {
            // Handle error
            setMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div className='max-w-sm bg-white mx-auto p-8 mt-36 shadow-md'>
            <h2 className='text-2xl font-semibold text-center'>Sign Up</h2>
            <form className='space-y-5 max-w-sm mx-auto pt-8' onSubmit={handleSubmit}>
                <input
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                    type='text'
                    placeholder='Username'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                    type='text'
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                    type='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    message && <p className='text-red-500'>{message}</p>
                }
                <button
                    type='submit'
                    className='font-medium w-full mt-5 bg-Primary hover:bg-indigo-500 px-5 py-3 text-white rounded-md'
                    disabled={isLoading}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
                <p className='text-center'>
                    Already have an account? <Link to='/login' className='text-red-500'>Login</Link> here.
                </p>
            </form>
        </div>
    );
};

export default Register;
