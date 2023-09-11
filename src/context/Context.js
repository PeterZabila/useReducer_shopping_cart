import React, { createContext, useReducer, useContext } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';
import { v4 as uuidv4 } from 'uuid';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
const Cart = createContext();

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: uuidv4(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlPicsumPhotos(),
        inStock: randomIntFromInterval(1, 20),
        fastDelivery: faker.datatype.boolean(),
        ratings: randomIntFromInterval(1, 5),
      }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  )
}

export const CartState = () => {
    return useContext(Cart);
};

export default Context