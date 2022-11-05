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
                const currentUser = {
                    email: user.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                        navigate("/home")
                    })
                    .catch(e => console.log(e))

                console.log(user.email)
            })
            .catch(error => console.error(error))
        form.reset();

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