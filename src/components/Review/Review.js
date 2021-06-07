import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'

import ReviewItem from '../ReviewItem/ReviewItem';
import { Button } from '@material-ui/core';

import { Link, useHistory } from 'react-router-dom';



const Review = () => {
   const[cart, setCart] = useState([])

   const removeProduct = productKey=>{
     console.log("product have removed", productKey )
     const newCart = cart.filter(pd =>pd.key !== productKey)
     setCart(newCart)
     removeFromDatabaseCart(productKey)
   }
  const [orderPlace, setOrderPlace] = useState(false)
  const history = useHistory()

   const handleProceedCheckout = () => {
 history.push("/shipment")

}
let thankYou
    if (orderPlace) {
        // thankYou = <h1>hi</h1>
        thankYou =  <img src={happyImage} alt="" />
    }

   useEffect(()=>{
       const saveCart = getDatabaseCart()
       const productKeys = Object.keys(getDatabaseCart())
    //    console.log (productKey)
    const cartCounts = productKeys.map(key => {
        const product = fakeData.find(pd => pd.key===key)
        product.quantity = saveCart[key]
        return product
    })
    setCart(cartCounts)

    
 
   },[])
    return (
        <div className = "shop-container">
            <div className="product-container">
            <h1>this is form review and length {cart.length}</h1>
            { 
            cart.map(pd =><ReviewItem product={pd} removeProduct={removeProduct}></ReviewItem>)
            }
             {thankYou}
            </div>
           
            
            <div className="cart-container">
                
            <Cart cart={cart}>
            <Link > <Button onClick={handleProceedCheckout} variant="contained" color="primary">proceed checkout</Button> </Link>
            </Cart>
            </div>
           
        </div>
    );
};

export default Review;