import React from 'react';
import './Review.css';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Review = ({ cart, handleDelete }) => {
    const { _id, name, img, quantity, price, shipping } = cart;

    return (
        <div className='review'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='info-container'>
                <div>
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: ${quantity}</p>
                    <p><small>Shipping: ${shipping}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleDelete(_id)} className='delete-btn'>
                        <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;