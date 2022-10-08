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



export { addToDb, getStordCard }