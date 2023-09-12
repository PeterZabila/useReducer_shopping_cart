import React from 'react';
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import Filters from './Filters';

const Home = () => {
    const { state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery }
  } = CartState();

  const transformedProducts = () => {
    let sorted = products;

    if(sort) {
      sorted = sorted.sort((a, b) => 
        sort === "lowToHigh" ? a.price-b.price : b.price-a.price
      );
    }

    if(!byStock) {
      sorted = sorted.filter((prod) => prod.inStock)
    }

    if(byFastDelivery) {
      sorted = sorted.filter((prod) => prod.byFastDelivery)
    }

    if(byRating) {
      sorted = sorted.filter((prod) => prod.ratings === byRating)
    }

    if(searchQuery) {
      sorted = sorted.filter((prod) => prod.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    return sorted;
  }

  return (
    <div className='home'>
        <Filters />
        <div className='productContainer'>
          {transformedProducts()?.length && transformedProducts().map((prod) => (
              <SingleProduct prod={prod} key={prod.id}/>
          ))}
        </div>
    </div>
  )
}

export default Home
