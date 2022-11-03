import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../utilites/UserContext';

const Home = () => {
    const { user } = useContext(AuthContex)
    return (
        <div>
            this is home
            {
                user?.uid ? <h1>Thank YOu Sir For My Web Site Visit</h1> :
                    <h1>Hey bro Please <Link to='/log-in'>Log In</Link></h1>
            }
        </div>
    );
};

export default Home;