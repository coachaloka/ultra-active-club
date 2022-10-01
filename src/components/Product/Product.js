import React from 'react';
import './Product.css';

  const Product = ({product, handleAddToCart}) => {
      const {name, img, age, time, }= product;

     return (
          <div className='product'>
             <img src={img} alt=""></img>
            <div className='product-info'>
                 <p className='product-name'>{name}</p>
                 <p>Age: {age}y</p>
                 <p><small>Time: {time}m</small></p>
            </div>
                 <button onClick={() => handleAddToCart(product)}className='btn-cart'>
                     <p className='btn-text'>Add to Cart</p>
                </button>
         </div>
        
     );
 };

 export default Product;