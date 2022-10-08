import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import { getStordCard, removeFromDb } from '../utilites/fakeDb';
import Review from './Review/Review';

const OrderRivew = () => {
    const products = useLoaderData()

    // console.log(products)

    const stordCard = getStordCard();
    const savedCart = [];
    const [cart, setCart] = useState(savedCart);
    if (stordCard) {
        for (const id in stordCard) {
            const addedProduct = products.find(product => product.id === id);
            const quantity = stordCard[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
        // const newCart = [...card, ...savedCard]
        // setCard(newCart)
    }

    const handleDelete = id => {
        const addedProduct = cart.filter(product => product.id !== id);
        setCart(addedProduct)
        removeFromDb(id);

    }





    return (
        <div className='shop'>
            <div className="Review-container">
                {
                    cart.map(cart => <Review key={cart.id} cart={cart} handleDelete={handleDelete}></Review>)
                }
            </div>
            <div className='order-container'>

                < Order cart={cart} ></Order>

            </div>
        </div >
    );
};

export default OrderRivew;