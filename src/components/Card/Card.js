import React from 'react';
import './Card.css';

const Card = ({ shop, handleAddToCart }) => {
    const { name, img, price, seller, ratings } = shop;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h3>{name}</h3>
                <h4>$ {price}</h4>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(shop)} className='card-btn'>Add to Card</button>
        </div>
    );
};

export default Card;