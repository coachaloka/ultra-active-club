import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';
import './Shop.css'

const Shop = () => {
    const [ products, setProducts] = useState([]);
    const [ time, setTime] = useState(0);

   useEffect( () => {
        fetch("products.json")
        .then(res=> res.json())
        .then(data => setProducts(data));
    
   }, []);

   const handleAddList = (product)=>{
   setTime =[time + product.time];
   }

    return (
        <div className='shop-container'>
            <div>
                <h2>Exercise: {products.length}</h2>
                <div className="product-container">
                {
                    products?.map(product=><Product
                    product={product}
                    handleAddList={handleAddList}
                    key={product.id}
                    />)
                }
                </div>   
            </div>

            <div>
                <Summary time={time}/>
           </div>
        </div>
        
    );
};

export default Shop;