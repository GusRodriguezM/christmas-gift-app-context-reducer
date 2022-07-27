import React, { useContext, useState } from 'react';
import { login } from '../../actions/auth';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const LoginScreen = () => {

    const { dispatchLogin } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const isFormValid = () => {
        if(name.trim().length === 0 && email.trim().length === 0 && password.trim().length === 0){
            setMessage('These fields are required');
            setVisible(true);
            return false;
        }else if(!validator.isEmail(email)){
            setMessage('The email is not valid');
            setVisible(true);
            return false;
        }else if(name.trim().length === 0){
            setMessage('The name is required');
            setVisible(true);
            return false;
        }else if(email.trim().length === 0){
            setMessage('The email is required');
            setVisible(true);
            return false;
        }else if(password.trim().length === 0){
            setMessage('The password is required');
            setVisible(true);
            return false;
        }

        setMessage('');
        setVisible(false);
        return true;
    }

    const handleLogin = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatchLogin( login({ name, email, password }) );
        }
    }

    return (
        <div className='login'>

            <div className={`login__message ${!visible && 'display'}`}>
                <i className="fa-solid fa-circle-exclamation"></i>
                <h4>{message}</h4>
            </div>

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
                    type='password'
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