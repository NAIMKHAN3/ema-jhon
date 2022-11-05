import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Order from '../Order/Order';
import { addToDb, getStordCard } from '../utilites/fakeDb';
import './Shop.css'

const Shop = () => {

    const [cart, setCart] = useState([])
    const [storage, setStorage] = useState([]);
    const [shops, setShops] = useState([]);
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10)
    const pages = Math.ceil(count / size)
    const array = [...Array(pages).keys()]


    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setShops(data.products)
            })
    }, [page, size]);

    useEffect(() => {
        const stordCard = getStordCard();

        const ids = Object.keys(stordCard);
        fetch('http://localhost:5000/productsById', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => setStorage(data))
            .catch(e => console.log(e))

        const savedCard = [];
        for (const id in stordCard) {

            const addedProduct = storage.find(shop => shop._id === id);
            const quantity = stordCard[id];
            if (addedProduct) {
                addedProduct.quantity = quantity;
                savedCard.push(addedProduct)

            }
        }
        setCart(savedCard);

    }, [storage])

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
        addToDb(selectedShop._id)
        const exist = cart.find(product => product._id === selectedShop._id);
        let newCart = [];
        if (!exist) {
            selectedShop.quantity = 1;
            newCart = [...cart, selectedShop]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedShop._id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }


        setCart(newCart);
    }
    const clearCart = () => {
        console.log('clickd')
        setCart([])
        deleteStorage();
    }
    const deleteStorage = () => {
        localStorage.removeItem('shoping-cart')
    }



    return (
        <div className='shop'>
            <div className="card-container">
                {
                    shops.map(shop => <Card key={shop._id} shop={shop} handleAddToCart={handleAddToCart}></Card>)
                }
            </div>
            <div className='order-container'>
                <Order clearCart={clearCart} cart={cart}>
                    <Link to='/order-review'><button>Review order</button></Link>
                </Order>
            </div>
            <div className="pagination">
                <p>curent page : {page}</p>
                {
                    array.map(number => <button
                        key={number}
                        className={page === number ? 'current' : ''}
                        onClick={() => setPage(number)}>{number}
                    </button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;