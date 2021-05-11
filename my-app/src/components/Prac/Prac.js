import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Prac.css'


const Prac = (props) => {
    console.log(props)
    const{img, name, seller, price, stock} = props.product
    return (
        <div className="product">
            <div className="productImg">
             <img src={img} alt="" />
            </div>
            <div className="productInfo">
                <h4> <a href="#">{name}</a></h4>
                <h5> by {seller}</h5>
                <h6><small>price only $ {price} </small></h6>       
                <h5>remain only{stock}</h5>
                <button className="mainBtn" onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />
               
add to cart</button>

            </div>

        </div>
      
    );
};

export default Prac;