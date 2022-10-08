const addToDb = id => {
    let shopingCart = {};
    let stordCard = localStorage.getItem('shoping-cart');
    if (stordCard) {
        shopingCart = JSON.parse(stordCard);
    }
    else {
        shopingCart = {};
    }
    let quantity = shopingCart[id];
    if (quantity) {
        shopingCart[id] = quantity + 1;
    }
    else {
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}

const getStordCard = () => {
    let shopingCart = {};
    let stordCard = localStorage.getItem('shoping-cart');
    if (stordCard) {
        shopingCart = JSON.parse(stordCard);
    }
    return shopingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shoping-cart', JSON.stringify(shoppingCart));
        }
    }
}



export { addToDb, getStordCard, removeFromDb }