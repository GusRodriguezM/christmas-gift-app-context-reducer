import React, { useContext } from 'react';
import { login } from '../../actions/auth';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const { dispatchLogin } = useContext(AuthContext);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatchLogin( login({ name, email, password }) );
    }

    return (
        <div className='login'>

            <h1 className='login__title'>Login</h1>

            <form onSubmit={handleLogin} className='login__form'>

                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='login__form--input'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='login__form--input'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type='text'
                    placeholder='Password'
                    name='password'
                    className='login__form--input'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type='submit'
                    className='login__form--button'
                >
                    Login
                </button>

            </form>
        </div>
    )
}