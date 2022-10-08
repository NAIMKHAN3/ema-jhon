import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/order-review">Order-Review</a>
                <a href="/manage-inventory">Manage-Inventory</a>
                <a href="/log-in">Log In</a>
            </div>
        </div>
    );
};

export default Header;