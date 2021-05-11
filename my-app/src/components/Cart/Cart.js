import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    let total = 0
 

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
       total = total +product.price 

   
       

        
    }
    let shipping = 0
    if (total > 50 ) {
        shipping = 5
    }
     else if(total > 15  ){
        shipping = 2
    }
    else if(total > 0 ){
        shipping = 0
    }
    let tax = (total + shipping)*.1
    function toRound(num) {
         const precision = Math.round(num)
         return precision
        
    }
    
  
   

    return (
        <div>
            <h4>this is cart container</h4>
            <h4>order summary : {cart.length}</h4>
            
            <h4>shipping cost : { toRound(shipping)}</h4>
            <h4>tax : {toRound(tax)}</h4>
            <h4>product price {toRound(total)}</h4>
            <h4>total : {toRound((total + shipping + tax))}</h4>
        </div>
    );
};

export default Cart;