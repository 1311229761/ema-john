
import React from 'react';
import fakeData from '../../fakeData';
import { useState } from "react";
import "./Shop.css";
import Product from '../Product/Product'
import Prac from '../Prac/Prac'
import Cart from '../Cart/Cart';


const Shop = () => {

    const first10 = fakeData.slice(0, 10)
   
    const [products, setProducts] = useState(first10)
    const [cart , setCount] = useState([])
    const handleAddProduct = (product)=>{
        
        const newCart = [...cart , product]
        setCount(newCart)
    }
    
   
    return (
        <div className = "shop-container">
        
           <div className="product-container">

                
                        {
                            products.map(pd =><Prac product={pd} handleAddProduct={handleAddProduct}>  </Prac>)
                        }
                    

           </div>

           <div className="cart-container">
              <Cart cart={cart}></Cart>

           </div>
          
            
        </div>
    );
};

export default Shop;