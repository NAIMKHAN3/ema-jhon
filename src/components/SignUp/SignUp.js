import { signInAnonymously } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../utilites/UserContext';

const SignUp = () => {
    const { signIn } = useContext(AuthContex)
    const [error, setError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (confirm !== password) {
            setError('Check Your Confirm Password')
            return;
        }
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
        form.reset();
        console.log(email, password, confirm)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <p>Sign Up</p>
                <small className='error'>{error}</small>
                <div>
                    <label className='label' htmlFor="email">Email</label>
                    <input className='' type="email" name='email' />
                </div>
                <div>
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name='password' />
                </div>
                <div>
                    <label className='label' htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' />
                </div>
                <div>
                    <button className='btn-login'>Sign up</button>

                </div>
                <h4>Already Have an Account?  <Link to='/log-in'>Please Login</Link></h4>
            </form>
        </div>
    );
};

export default SignUp;