import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import { getStordCard, removeFromDb } from '../utilites/fakeDb';
import Review from './Review/Review';

const OrderRivew = () => {
    const { products } = useLoaderData();

    const stordCard = getStordCard();
    const savedCart = [];
    const [cart, setCart] = useState(savedCart);
    if (stordCard) {
        for (const _id in stordCard) {
            const addedProduct = products.find(product => product._id === _id);
            const quantity = stordCard[_id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
        // const newCart = [...card, ...savedCard]
        // setCard(newCart)
    }

    const handleDelete = id => {
        const addedProduct = cart.filter(product => product._id !== id);
        setCart(addedProduct)
        removeFromDb(id);

    }
    const clearCart = () => {
        setCart([])
        deleteStorage();
    }

    const deleteStorage = () => {
        localStorage.removeItem('shoping-cart')
    }





    return (
        <div className='shop'>
            <div className="Review-container">
                {
                    cart.map(cart => <Review key={cart._id} cart={cart} handleDelete={handleDelete}></Review>)
                }
                {
                    cart.length === 0 && <h2>No items for Review, please shop now. <Link to="/shop">Shop Now</Link></h2>
                }
            </div>
            <div className='order-container'>

                < Order clearCart={clearCart} cart={cart} ></Order>

            </div>
        </div >
    );
};

export default OrderRivew;