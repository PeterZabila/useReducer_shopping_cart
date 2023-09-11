import React from 'react';
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import Filters from './Filters';

const Home = () => {
    const { state } = CartState()

    console.log(state.products)
    console.log(state)


  return (
    <div className='home'>
        <Filters />
        <div className='productContainer'>
          {state.products?.length && state.products.map((prod) => (
              <SingleProduct prod={prod} key={prod.id}/>
          ))}
        </div>
    </div>
  )
}

export default Home
