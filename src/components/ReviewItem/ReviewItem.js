import { Button } from '@material-ui/core';
import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
   const {img, name, seller, price, stock, quantity, removeProduct, key} = props.product
    return (
        <div>
           <img src={img} alt="" /> 
          <p>Name {name}</p>  
          <p>Quantity {quantity}</p>  
          <h5>price {price}$</h5>  
          <Button variant="contained" color="primary"  onClick={()=>props.removeProduct(key)}>remove</Button>
        </div>
    );
};

export default ReviewItem;