import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContex } from '../utilites/UserContext';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContex)

    const signOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <div>
                <NavLink to='/home'>Home</NavLink>
                {
                    user?.uid && <><NavLink to='/shop'>Order-shop</NavLink>
                        <NavLink to='/order-review'>Order-Review</NavLink>
                        <NavLink to='/manage-inventory'>Manage-Inventory</NavLink></>
                }
                {
                    user?.email ? <button onClick={signOut} className='logout'>Log Out</button> : <>
                        <NavLink to='/log-in'>Log In</NavLink>
                        <NavLink to='/sign-up'>Sign up</NavLink>
                    </>
                }



                {
                    user?.email ? <a>{user?.email}</a> : ''
                }
                {
                    user?.photoURL && <a className='user-img'><img src={user?.photoURL} alt="" /></a>
                }

            </div>
        </div>
    );
};

export default Header;