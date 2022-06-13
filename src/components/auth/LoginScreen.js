import React, { useContext } from 'react';
import { login } from '../../actions/auth';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const {user, dispatchLogin} = useContext(AuthContext);

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
        <>
            <form onSubmit={handleLogin}>

                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    className=''
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type='text'
                    placeholder='Email'
                    name='email'
                    className=''
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type='text'
                    placeholder='Password'
                    name='password'
                    className=''
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type='submit'
                    className=''
                >
                    Login
                </button>

            </form>
        </>
    )
}