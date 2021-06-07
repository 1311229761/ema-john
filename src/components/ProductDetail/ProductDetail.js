import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Prac from '../Prac/Prac';

const ProductDetail = () => {
    // let { id } = useParams();
   const {productKey} = useParams()
  const product = fakeData.find(pd=>pd.key===productKey)
 
  
    return (
        <div>
            <h1>{productKey} mean  prodcut detail is coming</h1>
            <Prac product = {product} showAddToCart= {false}></Prac>
        </div>
    );
};

export default ProductDetail;