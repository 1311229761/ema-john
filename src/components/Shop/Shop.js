
import React from 'react';
import fakeData from '../../fakeData';
import { useState } from "react";
import "./Shop.css";
import Product from '../Product/Product'
import Prac from '../Prac/Prac'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from "../../utilities/databaseManager";
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';


const Shop = () => {

    const first10 = fakeData.slice(0, 10)
   const [products, setProducts] = useState(first10)
    const [cart , setCount] = useState([])

    useEffect(()=>{
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(getDatabaseCart())
     //    console.log (productKey)
     const cartCounts = productKeys.map(key => {
         const product = fakeData.find(pd => pd.key===key)
         product.quantity = saveCart[key]
         return product
     })
     setCount(cartCounts)
  
    },[])

    const handleAddProduct = (product)=>{
        const toBeAddedKey = product.key
        const sameProduct = cart.find(pd => pd.key===toBeAddedKey)
        let count= 1
        let newCart
        if (sameProduct) {
            count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd => pd.key!==toBeAddedKey)
             newCart = [...others , sameProduct]
        }
        else{
            product.quantity = 1
             newCart = [...cart , product]

        }
       
        setCount(newCart)
        
        addToDatabaseCart(product.key, count)
    }
    
   
    return (
        <div className = "shop-container">
        
           <div className="product-container">

                
                        {
                            products.map(pd =><Prac product={pd} handleAddProduct={handleAddProduct} key = {pd.key} showAddToCart= {true} >  </Prac>)
                        }
                    

           </div>

           <div className="cart-container">
              <Cart cart={cart}>
              <Link to = "/review"> <Button variant="contained" color="primary">review</Button> </Link>
              </Cart>

           </div>
          
            
        </div>
    );
};

export default Shop;