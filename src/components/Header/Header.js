import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <div>
                <NavLink to='/shop'>Order-shop</NavLink>
                <NavLink to='/order-review'>Order-Review</NavLink>
                <NavLink to='/manage-inventory'>Manage-Inventory</NavLink>
                <NavLink to='/log-in'>Log In</NavLink>

            </div>
        </div>
    );
};

export default Header;