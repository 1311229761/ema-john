import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Prac.css'
import Button from '@material-ui/core/Button';
import{ Link} from 'react-router-dom'


const Prac = (props) => {
    // console.log(props)
    const{img, name, seller, price, stock, key} = props.product
    return (
        <div className="product">
            <div className="productImg">
             <img src={img} alt="" />
            </div>
            <div className="productInfo">
                <h4> <Link to={"/product/"+key}>{name} </Link></h4>
               
                <h5> by {seller}</h5>
                <h6><small>price only $ {price} </small></h6>       
                <h5>remain only{stock}</h5>
               { props.showAddToCart && <Button variant="contained" color="primary" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />  added to cart  </Button>}
               

            </div>

        </div>
      
    );
};

export default Prac;