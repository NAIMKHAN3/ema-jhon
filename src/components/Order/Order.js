import React from 'react';
import './Order.css';

const Order = ({ cart }) => {

    let price = 0;
    let sipping = 0;
    let tax = 0;
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        // console.log(product)
        quantity = quantity + product.quantity;
        price = price + product.price * quantity;
        sipping = sipping + product.shipping;
        tax = (price * 0.1).toFixed(2)
        total = price + sipping + parseFloat(tax)
    }



    return (
        <div className='cart'>
            <h2>Order summury</h2>
            <h3>Selected Item: {quantity}</h3>
            <p>Total Price: ${price}</p>
            <p>Total Shipping:${sipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${total}</h4>
        </div>
    );
};

export default Order;