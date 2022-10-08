import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import Order from '../Order/Order';
import { addToDb, getStordCard } from '../utilites/fakeDb';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([])
    const [shops, setShops] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setShops(data))
    }, []);

    useEffect(() => {
        const stordCard = getStordCard();
        const savedCard = [];
        for (const id in stordCard) {

            const addedProduct = shops.find(shop => shop.id === id);
            const quantity = stordCard[id];
            if (addedProduct) {
                addedProduct.quantity = quantity;
                savedCard.push(addedProduct)

            }
        }
        setCart(savedCard);

    }, [shops])

    // useEffect(() => {
    //     const stordCard = getStordCard()
    //     const savedCard = [];
    //     for (const id in stordCard) {
    //         const addedProduct = shops.find(shop => shop.id == id);
    //         if (addedProduct) {
    //             const quantity = stordCard[id]
    //             addedProduct.quantity = quantity;
    //             savedCard.push(addedProduct)


    //         }
    //     }
    //     setCart(savedCard)
    // }, [shops])


    // const SddToDb = (id) => {

    //     let shopingCart = {};
    //     const stordCard = localStorage.getItem('shoping-cart')
    //     if (stordCard) {
    //         shopingCart = JSON.parse(stordCard);
    //     }
    //     else {
    //         shopingCart = {};
    //     }



    //     const quantity = shopingCart[id];

    //     if (quantity) {
    //         shopingCart[id] = quantity + 1
    //         // localStorage.setItem(id, newQuantity)
    //     }
    //     else {
    //         shopingCart[id] = 1;
    //         // localStorage.setItem(id, 1)
    //     }
    //     localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
    // }


    const handleAddToCart = (selectedShop) => {
        addToDb(selectedShop.id)
        const exist = cart.find(product => product.id === selectedShop.id);
        let newCart = [];
        if (!exist) {
            selectedShop.quantity = 1;
            newCart = [...cart, selectedShop]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedShop.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }


        setCart(newCart);
    }



    return (
        <div className='shop'>
            <div className="card-container">
                {
                    shops.map(shop => <Card key={shop.id} shop={shop} handleAddToCart={handleAddToCart}></Card>)
                }
            </div>
            <div className='order-container'>
                <Order cart={cart}></Order>
            </div>
        </div>
    );
};

export default Shop;