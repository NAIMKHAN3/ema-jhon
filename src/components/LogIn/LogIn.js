import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../utilites/UserContext';
import './Login.css'

const LogIn = () => {
    const { logIn, signInGoogle } = useContext(AuthContex)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;

                console.log(user)
            })
            .catch(error => console.error(error))
        form.reset();
        navigate("/home")
        console.log(email, password,)
    }


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <p>Log In</p>
                <div>
                    <label className='label' htmlFor="email">Email</label>
                    <input className='' type="email" name='email' />
                </div>
                <div>
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name='password' />
                </div>
                <div>
                    <button className='btn-login'>Login</button>

                </div>
                <h4>New to Ema-jhon <Link to='/sign-up'>Create New Account</Link></h4>
                <hr />
                <div>
                    <button onClick={signInGoogle} className='google'>Continue With Google</button>

                </div>
            </form>
        </div>
    );
};

export default LogIn;